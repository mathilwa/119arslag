import React from 'react';
import { isNull, isEmpty } from 'lodash';
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
      antallPoeng: null,
      antallSekunder: null,
      antallMinutter: null,
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
    if (isNull(antallMinutter) && isNull(antallSekunder)) {
      return null;
    }
    const miutterSomSekundpoeng = !isNull(antallMinutter) ? (parseInt(antallMinutter) * 60) : 0;
    const sekunderSomPoeng = !isNull(antallSekunder) ? parseInt(antallSekunder) : 0;
    return miutterSomSekundpoeng + sekunderSomPoeng;
  },
  giPoeng (event) {
    event.preventDefault();
    const poengtypeErPoeng = this.props.post.poengtype === POENGTYPE_POENG;
    const poeng = poengtypeErPoeng ? this.state.antallPoeng : this.kalkulerPoengFraMinutterOgSekunder();
    if (!isNull(poeng) && !isEmpty(this.state.valgtLag)) {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      const poengObjekt = {
        lag: this.state.valgtLag,
        antallPoeng: poeng,
        bonusValg: this.state.bonusValg,
        post: this.props.post.nummer,
      };

      fetch('https://torunnogtrond.firebaseio.com/konkurranse.json', {
        method: 'post',
        headers: headers,
        body: JSON.stringify(poengObjekt),
      })
      .then(response => response.json())
      .then(key => {
        const valgtLag = this.state.valgtLag;
        this.setState({
          antallPoeng: null,
          antallSekunder: null,
          antallMinutter: null,
          valgtLag: '',
          suksessmelding: `${this.props.post.poengtype} ble registrert for Lag ${valgtLag}!`,
        });
        this.props.oppdaterPoengoversikt(Object.assign({}, poengObjekt, {id: key.name}));
      });
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
              <input className="tekstinput" type="number" id="navn" placeholder={post.poengPlaceholder} value={this.state.antallPoeng === null ? '' : this.state.antallPoeng} onChange={(event) => this.oppdaterPoeng(event)} required/>
            </span>
          </VisibleIf>
          <VisibleIf isVisible={post.poengtype === POENGTYPE_TID}>
            <span>
              <label htmlFor="minutter">{post.poenglabel}</label>
              <input className="tekstinput tidsinput" type="number" id="minutter" placeholder="Minutter" value={this.state.antallMinutter === null ? '' : this.state.antallMinutter} onChange={(event) => this.oppdaterMinutter(event)} required/>
              <input className="tekstinput tidsinput" type="number" id="sekunder" placeholder="Sekunder" value={this.state.antallSekunder === null ? '' : this.state.antallSekunder} onChange={(event) => this.oppdaterSekunder(event)} required/>
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
