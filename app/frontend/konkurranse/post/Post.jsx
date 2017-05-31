import React from 'react';
import { forIn, isEmpty } from 'lodash';
import { finnPost } from '../postene.js';
import { angiPlasseringForLag } from '../sorteringAvLag.js';
import GiPoeng from './GiPoeng.jsx';
import Informasjon from './Informasjon.jsx';
import PoengInfo from './PoengInfo.jsx';
import LagSomHarFattPoeng from './LagSomHarFattPoeng.jsx';
import VisibleIf from '../../VisibleIf.jsx';

const Post = React.createClass({
  getInitialState () {
    return {
      poengoversiktForPost: [],
    };
  },
  componentDidMount () {
    fetch('https://torunnogtrond.firebaseio.com/konkurranse.json').then(response => {
      if (response.ok) {
        response.json().then(poengoversikt => {
          this.byggPoengoversiktForPost(poengoversikt);
        });
      }
    }).catch(() => {
      console.log('Kunne ikke hente påmeldte');
    });
  },
  byggPoengoversiktForPost (poengoversikt) {
    const poengoversiktVisning = [];
    forIn(poengoversikt, (poengobjekt, key) => {
      if (poengobjekt.post === this.props.params.id) {
        const poengbjektForVisning = {
          id: key,
          lag: poengobjekt.lag,
          antallPoeng: poengobjekt.antallPoeng ? parseInt(poengobjekt.antallPoeng) : null,
          post: poengobjekt.post,
          bonusValg: poengobjekt.bonusValg,
          plassering: poengobjekt.plassering,
        };
        poengoversiktVisning.push(poengbjektForVisning);
      }
    });
    this.setState({poengoversiktForPost: poengoversiktVisning});
  },
  oppdaterLag (lag) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    fetch(`https://torunnogtrond.firebaseio.com/konkurranse/${lag.id}.json`, {
      method: 'put',
      headers: headers,
      body: JSON.stringify(lag),
    });
  },
  oppdaterPlasseringForLag (oppdatertListe) {
    oppdatertListe.forEach(lag => this.oppdaterLag(lag));
  },
  oppdaterPoengoversikt (poengobjekt) {
    const poengoversikt = this.state.poengoversiktForPost;
    poengoversikt.push(poengobjekt);
    const oppdatertListe = angiPlasseringForLag(poengoversikt, this.props.params.id);
    this.setState({poengoversiktForPost: oppdatertListe});
    this.oppdaterPlasseringForLag(oppdatertListe);
  },
  render () {
    const nummerPaPost = this.props.params.id;
    const post = finnPost(nummerPaPost);
    return (
      <div className="information pure-g information-container">
        <div className="pure-u-1">
          <div className="l-box">
            <h1 className="information-head">Post {post.nummer} - {post.tittel}</h1>
            <Informasjon informasjon={post.informasjon}/>
            <PoengInfo poenginfo={post.poeng}/>
            <h3 className="information-head">Gi poeng</h3>
            <GiPoeng post={post} oppdaterPoengoversikt={this.oppdaterPoengoversikt} oppdaterPlasseringForLag={this.oppdaterPlasseringForLag} lagSomAlleredeHarFattPoeng={this.state.poengoversiktForPost}/>
            <VisibleIf isVisible={!isEmpty(this.state.poengoversiktForPost)}>
              <LagSomHarFattPoeng poengoversiktForPost={this.state.poengoversiktForPost} poengLabel={post.poenglabel}/>
            </VisibleIf>
          </div>
        </div>
      </div>
    );
  },
});

export default Post;
