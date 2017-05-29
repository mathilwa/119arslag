import React from 'react';
import { isNull, isEmpty } from 'lodash';
import VelgLag from '../VelgLag.jsx';

const Post = React.createClass({
  propTypes: {
    post: React.PropTypes.object.isRequired,
  },
  getInitialState () {
    return {
      antallPoeng: null,
      valgtLag: '',
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
        }),
      });
      this.setState({antallPoeng: null, valgtLag: ''});
    } else {
      this.setState({feilmelding: 'Poeng må fylles ut'});
    }
  },
  render () {
    const post = this.props.post;
    return (
      <div className="pure-form pure-form-stacked">
        <fieldset>
          <VelgLag velgLag={this.velgLag}/>
          <label htmlFor="navn">{post.poenglabel}</label>
          <input className="tekstinput" type="text" id="navn" placeholder={post.poengPlaceholder} value={this.state.antallPoeng} onChange={this.oppdaterPoeng} required/>
          <div className="bonuspoeng tekstinput">
            <label htmlFor="epost">Bonuspoeng for godt samarbeid?</label>
            <input type="checkbox" name="bonus" value="Bonus"/>
          </div>
          <button className="pure-button button-large meld-pa" type="submit" onClick={(event) => this.giPoeng(event)}>Registrer poeng</button>
        </fieldset>
      </div>
    );
  },
});

export default Post;
