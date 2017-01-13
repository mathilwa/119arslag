import React from 'react';
import Folge from './Folge.jsx';

const Pamelding = React.createClass({
  getInitialState () {
    return {
      navn: '',
      epost: '',
      antallFolge: 0,
      folge: [],
    };
  },
  oppdaterNavn (event) {
    this.setState({navn: event.target.value});
  },
  oppdaterEpost (event) {
    this.setState({epost: event.target.value});
  },
  oppdaterAntallFolge () {
    this.setState({antallFolge: this.state.antallFolge + 1});
  },
  oppdaterFolge (event, key) {
    const folger = this.state.folge;
    folger[key] = event.target.value;
    this.setState({folge: folger});
  },
  meldPa (event) {
    event.preventDefault();

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    fetch('https://torunnogtrond.firebaseio.com/pameldte.json', {
      method: 'post',
      headers: headers,
      body: JSON.stringify({navn: this.state.navn, epost: this.state.epost, folge: this.state.folge}),
    });
    this.setState(this.getInitialState);
  },
  render () {
    return (
        <div className="pure-form information pure-form-stacked">
          <h3 className="information-head">Påmelding</h3>
          <p>For å vite hvor mange vi skal stelle i stand festligheter for er det fint at du melder deg på! Stedet vi skal være på ønsker en viss oversikt over hvor mange som kommer er vi nødt til å sette en frist relativt snart.</p>
          <p><strong>Påmelding ønskes derfor innen 14. februar.</strong></p>
          <fieldset>
            <legend>MELD DEG PÅ HER!</legend>
            <label htmlFor="navn">Navn</label>
            <input className="tekstinput" type="text" id="navn" placeholder="Navn" value={this.state.navn} onChange={this.oppdaterNavn}/>
            <label htmlFor="epost">Epostadresse</label>
            <input className="tekstinput" type="email" id="epost" placeholder="Epostadresse" value={this.state.epost} onChange={this.oppdaterEpost}/>
          </fieldset>
          <fieldset>
            <Folge antallFolge={this.state.antallFolge} oppdaterFolge={this.oppdaterFolge} oppdaterAntallFolge={this.oppdaterAntallFolge}/>
          </fieldset>
          <button className="pure-button button-xlarge meld-pa" type="submit" onClick={this.meldPa}>Meld på!</button>
        </div>
    );
  },
});

export default Pamelding;
