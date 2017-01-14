import React from 'react';
import 'whatwg-fetch';
import { isEmpty } from 'lodash';
import Folge from './Folge.jsx';
import DuErPameldt from './DuErPameldt.jsx';
import VisibleIf from './VisibleIf.jsx';

const Pamelding = React.createClass({
  getInitialState () {
    return {
      navn: '',
      epost: '',
      antallFolge: 0,
      folge: [],
      ekstraInformasjon: '',
      pameldt: false,
      feilmelding: '',
    };
  },
  oppdaterNavn (event) {
    this.setState({navn: event.target.value, feilmelding: ''});
  },
  oppdaterEpost (event) {
    this.setState({epost: event.target.value, feilmelding: ''});
  },
  oppdaterAntallFolge () {
    this.setState({antallFolge: this.state.antallFolge + 1});
  },
  oppdaterFolge (event, key) {
    const folger = this.state.folge;
    folger[key] = event.target.value;
    this.setState({folge: folger});
  },
  oppdaterEkstraInformasjon (event) {
    this.setState({ekstraInformasjon: event.target.value});
  },
  navnOgEpostErUtfylt () {
    return !isEmpty(this.state.navn) && !isEmpty(this.state.epost);
  },
  meldPa (event) {
    event.preventDefault();
    if (this.navnOgEpostErUtfylt()) {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');

      fetch('https://torunnogtrond.firebaseio.com/pameldte.json', {
        method: 'post',
        headers: headers,
        body: JSON.stringify({
          navn: this.state.navn,
          epost: this.state.epost,
          folge: this.state.folge,
          ekstraInformasjon: this.state.ekstraInformasjon,
        }),
      });
      this.setState({
        navn: '',
        epost: '',
        folge: [],
        ekstraInformasjon: '',
        pameldt: true,
      });
    } else {
      this.setState({feilmelding: 'Navn og epostadresse må fylles ut *'});
    }
  },
  meldPaFlere () {
    this.setState({
      pameldt: false,
      antallFolge: 0,
    });
  },
  render () {
    return (
      <div className="information pamelding-container">
        <div className="l-box">
          <div className="pure-form pure-form-stacked pamelding-form">
            <h3 className="information-head">Påmelding</h3>
            <p>For å vite hvor mange vi skal stelle i stand festligheter for er det fint at du melder deg på! Stedet vi skal være på ønsker en viss oversikt over hvor mange som kommer er vi nødt til å sette en frist relativt snart.</p>
            <p><strong>Påmelding ønskes derfor innen 14. februar.</strong></p>
            <VisibleIf isVisible={!this.state.pameldt}>
              <div>
              <fieldset>
                <legend>MELD DEG PÅ HER!</legend>
                <VisibleIf isVisible={!isEmpty(this.state.feilmelding)}>
                  <div className="feilmelding">{this.state.feilmelding}</div>
                </VisibleIf>
                <label htmlFor="navn">Navn *</label>
                <input className="tekstinput" type="text" id="navn" placeholder="Navn" value={this.state.navn} onChange={this.oppdaterNavn} required/>
                <label htmlFor="epost">Epostadresse *</label>
                <input className="tekstinput" type="email" id="epost" placeholder="Epostadresse" value={this.state.epost} onChange={this.oppdaterEpost} required/>
                <label htmlFor="ekstra-informasjon">Noe ekstra vi trenger å vite, som allergier eller andre ting vi bør ta hensyn til ?</label>
                <textarea id="ekstra-informasjon" placeholder="Skriv inn.." onChange={this.oppdaterEkstraInformasjon} value={this.state.ekstraInformasjon}/>
              </fieldset>
              <fieldset>
                <Folge antallFolge={this.state.antallFolge} oppdaterFolge={this.oppdaterFolge} oppdaterAntallFolge={this.oppdaterAntallFolge}/>
              </fieldset>

              <button className="pure-button button-xlarge meld-pa" type="submit" onClick={this.meldPa}>Meld på!</button>
                </div>
            </VisibleIf>
            <DuErPameldt pameldt={this.state.pameldt} antallFolge={this.state.antallFolge} meldPaFlere={this.meldPaFlere}/>
          </div>
        </div>
      </div>
    );
  },
});

export default Pamelding;
