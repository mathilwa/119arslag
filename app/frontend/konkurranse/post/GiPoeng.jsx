import React from 'react';
import { isNull, isEmpty } from 'lodash';
import VelgLag from '../VelgLag.jsx';
import VisibleIf from './../../VisibleIf.jsx';

const Post = React.createClass({
  propTypes: {
    post: React.PropTypes.object.isRequired,
    lagSomAlleredeHarFattPoeng: React.PropTypes.array.isRequired,
  },
  getInitialState () {
    return {
      antallPoeng: null,
      valgtLag: '',
      bonusValg: false,
      feilmelding: '',
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

      fetch('https://torunnogtrond.firebaseio.com/konkurranse.json', {
        method: 'post',
        headers: headers,
        body: JSON.stringify({
          lag: this.state.valgtLag,
          antallPoeng: this.state.antallPoeng,
          post: this.props.post.nummer,
          bonusValg: this.state.bonusValg,
        }),
      });
      this.setState({antallPoeng: null, valgtLag: ''});
    } else {
      this.setState({feilmelding: `${this.props.post.poengtype} må fylles ut`});
    }
  },
  render () {
    const post = this.props.post;
    return (
      <div className="pure-form pure-form-stacked">
        <fieldset>
          <VelgLag velgLag={this.velgLag} lagSomAlleredeHarFattPoeng={this.props.lagSomAlleredeHarFattPoeng}/>
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
        </fieldset>
      </div>
    );
  },
});

export default Post;
