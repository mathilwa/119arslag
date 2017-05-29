import React from 'react';
import { isEmpty } from 'lodash';
import VelgLag from './VelgLag.jsx';
import { POENGTYPE_TID, POENGTYPE_POENG } from './../postene.js';
import VisibleIf from './../../VisibleIf.jsx';

const Post = React.createClass({
  propTypes: {
    post: React.PropTypes.object.isRequired,
    lagSomAlleredeHarFattPoeng: React.PropTypes.array.isRequired,
    oppdaterPoengoversikt: React.PropTypes.func.isRequired,
  },
  getInitialState () {
    return {
      antallPoeng: '',
      antallSekunder: '',
      antallMinutter: '',
      valgtLag: '',
      bonusValg: false,
      feilmelding: '',
      suksessmelding: '',
    };
  },
  clearSuksessmelding () {
    this.setState({suksessmelding: ''});
  },
  oppdaterPoeng (event) {
    this.setState({antallPoeng: event.target.value});
    if (!isEmpty(this.state.suksessmelding)) {
      this.clearSuksessmelding();
    }
  },
  oppdaterMinutter (event) {
    this.setState({antallMinutter: event.target.value});
  },
  oppdaterSekunder (event) {
    this.setState({antallSekunder: event.target.value});
  },
  velgLag (lag) {
    this.setState({valgtLag: lag});
  },
  kalkulerPoengFraMinutterOgSekunder () {
    const antallMinutter = this.state.antallMinutter;
    const antallSekunder = this.state.antallSekunder;
    if (isEmpty(antallMinutter) && isEmpty(antallSekunder)) {
      return '';
    }
    const miutterSomSekundpoeng = !isEmpty(antallMinutter) ? parseInt(antallMinutter) * 60 : 0;
    const sekunderSomPoeng = !isEmpty(antallSekunder) ? parseInt(antallSekunder) : 0;
    return (miutterSomSekundpoeng + sekunderSomPoeng).toString();
  },
  giPoeng (event) {
    event.preventDefault();
    const poeng = this.props.post.poengtype === POENGTYPE_POENG ? this.state.antallPoeng : this.kalkulerPoengFraMinutterOgSekunder();
    if (!isEmpty(poeng) && !isEmpty(this.state.valgtLag)) {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      const poengObjekt = {
        lag: this.state.valgtLag,
        antallPoeng: poeng,
        post: this.props.post.nummer,
        bonusValg: this.state.bonusValg,
      };

      fetch('https://torunnogtrond.firebaseio.com/konkurranse.json', {
        method: 'post',
        headers: headers,
        body: JSON.stringify(poengObjekt),
      });
      const valgtLag = this.state.valgtLag;
      this.setState({
        antallPoeng: null,
        antallSekunder: null,
        antallMinutter: null,
        valgtLag: '',
        suksessmelding: `${this.props.post.poengtype} ble registrert for Lag ${valgtLag}!`});
      this.props.oppdaterPoengoversikt(poengObjekt);
    } else {
      this.setState({feilmelding: `${this.props.post.poengtype} må fylles ut`});
    }
  },
  render () {
    const post = this.props.post;
    return (
      <div className="pure-form pure-form-stacked gi-poeng">
        <fieldset>
          <VelgLag valgtLag={this.state.valgtLag} velgLag={this.velgLag} lagSomAlleredeHarFattPoeng={this.props.lagSomAlleredeHarFattPoeng} clearSuksessmelding={this.clearSuksessmelding}/>
          <VisibleIf isVisible={post.poengtype === POENGTYPE_POENG}>
            <span>
              <label htmlFor="navn">{post.poenglabel}</label>
              <input className="tekstinput" type="text" id="navn" placeholder={post.poengPlaceholder} value={this.state.antallPoeng} onChange={(event) => this.oppdaterPoeng(event)} required/>
            </span>
          </VisibleIf>
          <VisibleIf isVisible={post.poengtype === POENGTYPE_TID}>
            <span>
              <label htmlFor="minutter">{post.poenglabel}</label>
              <input className="tekstinput tidsinput" type="text" id="minutter" placeholder="Minutter" value={this.state.antallMinutter} onChange={(event) => this.oppdaterMinutter(event)} required/>
              <input className="tekstinput tidsinput" type="text" id="sekunder" placeholder="Sekunder" value={this.state.antallSekunder} onChange={(event) => this.oppdaterSekunder(event)} required/>
            </span>
          </VisibleIf>
          <div className="bonuspoeng tekstinput">
            <label htmlFor="epost">Bonuspoeng for godt samarbeid?</label>
            <input type="checkbox" name="bonus" value="Bonus" onChange={() => this.setState({bonusValg: !this.state.bonusValg})}/>
          </div>
          <VisibleIf isVisible={!isEmpty(this.state.feilmelding)}>
            <div className="feilmelding">{this.state.feilmelding}</div>
          </VisibleIf>
          <button className="pure-button button-large meld-pa" type="submit" onClick={(event) => this.giPoeng(event)}>Registrer poeng</button>
          <VisibleIf isVisible={!isEmpty(this.state.suksessmelding)}>
            <div className="suksessmelding">{this.state.suksessmelding}</div>
          </VisibleIf>
        </fieldset>
      </div>
    );
  },
});

export default Post;
