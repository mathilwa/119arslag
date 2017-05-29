import React from 'react';
import { isNull, isEmpty } from 'lodash';
import VelgLag from './VelgLag.jsx';
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
      valgtLag: '',
      bonusValg: false,
      feilmelding: '',
      suksessmelding: '',
    };
  },
  oppdaterPoeng (event) {
    this.setState({antallPoeng: parseInt(event.target.value)});
  },
  velgLag (lag) {
    this.setState({valgtLag: lag});
  },
  giPoeng (event) {
    event.preventDefault();
    if (!isNull(this.state.antallPoeng) && !isEmpty(this.state.valgtLag)) {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      const poengObjekt = {
        lag: this.state.valgtLag,
        antallPoeng: this.state.antallPoeng,
        post: this.props.post.nummer,
        bonusValg: this.state.bonusValg,
      };

      fetch('https://torunnogtrond.firebaseio.com/konkurranse.json', {
        method: 'post',
        headers: headers,
        body: JSON.stringify(poengObjekt),
      });
      const valgtLag = this.state.valgtLag;
      this.setState({antallPoeng: null, valgtLag: '', suksessmelding: `${this.props.post.poengtype} ble registrert for Lag ${valgtLag}!`});
      this.props.oppdaterPoengoversikt(poengObjekt);
    } else {
      this.setState({feilmelding: `${this.props.post.poengtype} må fylles ut`});
    }
  },
  clearSuksessmelding () {
    this.setState({suksessmelding: ''});
  },
  render () {
    const post = this.props.post;
    return (
      <div className="pure-form pure-form-stacked gi-poeng">
        <fieldset>
          <VelgLag valgtLag={this.state.valgtLag} velgLag={this.velgLag} lagSomAlleredeHarFattPoeng={this.props.lagSomAlleredeHarFattPoeng} clearSuksessmelding={this.clearSuksessmelding}/>
          <label htmlFor="navn">{post.poenglabel}</label>
          <input className="tekstinput" type="text" id="navn" placeholder={post.poengPlaceholder} value={this.state.antallPoeng} onChange={this.oppdaterPoeng} required/>
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
