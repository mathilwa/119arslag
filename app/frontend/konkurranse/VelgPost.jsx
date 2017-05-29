import React from 'react';
import { isEmpty, sortBy } from 'lodash';
import { browserHistory } from 'react-router';
import VisibleIf from './../VisibleIf.jsx';
import { postene } from './postene.js';

const VelgPost = React.createClass({
  getInitialState () {
    return {
      valgtPost: '',
    };
  },
  skrivUtOptions () {
    const sortertListe = sortBy(postene, 'nummer');
    return sortertListe.map((post, index) => <option key={index} value={post.nummer}>Post {post.nummer} - {post.tittel}</option>);
  },
  render () {
    return (
      <div className="information pure-g information-container">
        <div className="pure-u-1">
          <div className="l-box">
            <h1 className="information-head">Til postansvarlige</h1>
            <p>
              Hei alle dere som har sagt dere kan stå på post! Tusen takk for at dere tar dere tida, det settes stor pris på. Reglene for hver post, samt informasjon om poenggiving og mulighet til
              å gi poeng finnes inne på sidene for hver post. Velg derfor din post under, og lykke til! Spør meg, eller ring meg gjerne underveis på 92 28 42 70, om dere lurer på noe!
            </p>
            <h3 className="information-head">Velg post</h3>
            <form>
              <select className="post-nedtrekksliste input-select" id="post" name="post" onChange={(event) => this.setState({valgtPost: event.target.value})}>
                <option value="">Velg post</option>
                {this.skrivUtOptions()}
              </select>
              <VisibleIf isVisible={!isEmpty(this.state.valgtPost)}>
                <div>
                  <button className="pure-button button-large meld-pa" type="submit" onClick={() => browserHistory.push('/post/' + this.state.valgtPost)}>Gå til post</button>
                </div>
              </VisibleIf>
            </form>
          </div>
        </div>
      </div>
    );
  },
});

export default VelgPost;
