import React from 'react';
import { forIn, isEmpty, isUndefined } from 'lodash';
import { postene, POENGTYPE_TID } from '../postene.js';
import GiPoeng from './GiPoeng.jsx';
import Informasjon from './Informasjon.jsx';
import PoengInfo from './PoengInfo.jsx';
import LagSomHarFattPoeng from './LagSomHarFattPoeng.jsx';
import VisibleIf from '../../VisibleIf.jsx';

const mapPoeng = (nummerPaPost, antallPoeng) => {
  const post = postene.find(post => post.nummer === nummerPaPost);
  if (isUndefined(antallPoeng)) {
    return '';
  } else if (post.poengtype === POENGTYPE_TID) {
    const antallMinutter = Math.floor(antallPoeng / 60);
    const antallSekunder = antallPoeng - (antallMinutter * 60);
    return `${antallSekunder} min ${antallSekunder} sek`;
  }
  return antallPoeng.toString();
};

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
    forIn(poengoversikt, poengobjekt => {
      if (poengobjekt.post === this.props.params.id) {
        const poengbjektForVisning = {
          lag: poengobjekt.lag,
          antallPoeng: mapPoeng(this.props.params.id, poengobjekt.antallPoeng),
          post: poengobjekt.post,
          bonusValg: poengobjekt.bonusValg,
        };
        poengoversiktVisning.push(poengbjektForVisning);
      }
    });
    this.setState({poengoversiktForPost: poengoversiktVisning});
  },
  oppdaterPoengoversikt (poengobjekt) {
    const poengoversikt = this.state.poengoversiktForPost;
    poengoversikt.push(poengobjekt);
    this.setState({poengoversiktForPost: poengoversikt});
  },
  render () {
    const nummerPaPost = this.props.params.id;
    const post = postene.find(post => post.nummer === nummerPaPost);
    return (
      <div className="information pure-g information-container">
        <div className="pure-u-1">
          <div className="l-box">
            <h1 className="information-head">Post {post.nummer} - {post.tittel}</h1>
            <Informasjon informasjon={post.informasjon}/>
            <PoengInfo poenginfo={post.poeng}/>
            <h3 className="information-head">Gi poeng</h3>
            <GiPoeng post={post} oppdaterPoengoversikt={this.oppdaterPoengoversikt} lagSomAlleredeHarFattPoeng={this.state.poengoversiktForPost}/>
            <VisibleIf isVisible={!isEmpty(this.state.poengoversiktForPost)}>
              <LagSomHarFattPoeng poengoversiktForPost={this.state.poengoversiktForPost} poengLabel={post.poengPlaceholder}/>
            </VisibleIf>
          </div>
        </div>
      </div>
    );
  },
});

export default Post;
