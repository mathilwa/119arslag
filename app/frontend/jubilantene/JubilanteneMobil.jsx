import React from 'react';
import { JUBILANT_TORUNN, JUBILANT_TROND, JUBILANT_BEGGE } from './informasjon.js';
import Informasjonsblokk from './Informasjonsblokk.jsx';

const JubilanteneMobil = React.createClass({
  propTypes: {
    informasjonOmJubilantene: React.PropTypes.array.isRequired,
  },
  getInitialState () {
    return {
      valgtJubilant: JUBILANT_TORUNN,
    };
  },
  settValgtJubilant (jubilant) {
    this.setState({valgtJubilant: jubilant});
  },
  render () {
    const informasjonOmValgtJubilant = this.props.informasjonOmJubilantene.filter(informasjon => informasjon.jubilant === this.state.valgtJubilant || informasjon.jubilant === JUBILANT_BEGGE);
    return (
      <div className="jubilantene-mobil">
        <div className="jubilant-valg">
          <ul>
            <li className={this.state.valgtJubilant === JUBILANT_TORUNN ? 'er-valgt' : ''} onClick={() => this.settValgtJubilant(JUBILANT_TORUNN)}>Torunn</li>
            <li className={this.state.valgtJubilant === JUBILANT_TROND ? 'er-valgt' : ''} onClick={() => this.settValgtJubilant(JUBILANT_TROND)}>Trond</li>
          </ul>
        </div>
        <Informasjonsblokk informasjonOmJubilantene={informasjonOmValgtJubilant}/>
      </div>
    );
  },
});

export default JubilanteneMobil;
