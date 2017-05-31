import React from 'react';
import { forIn, groupBy, orderBy } from 'lodash';
import { Table } from 'reactable';
import { lagene } from './lagene.js';
import TorunnVsTrond from './TorunnVsTrond.jsx';

const ANTALL_MULIGE_PLASSER = 9;

const Poengoversikt = React.createClass({
  getInitialState () {
    return {
      poengoversiktPerLag: [],
    };
  },
  componentDidMount () {
    this.hentData();
    this.startIntervall();
  },
  startIntervall () {
    setInterval(() => this.hentData(), 60000);
  },
  hentData () {
    fetch('https://torunnogtrond.firebaseio.com/konkurranse.json').then(response => {
      if (response.ok) {
        response.json().then(poengoversikt => {
          this.byggPoengoversikt(poengoversikt);
        });
      }
    }).catch(() => {
      console.log('Kunne ikke hente påmeldte');
    });
  },
  byggOversiktEtterLagOgPoeng (poengoversikt) {
    const grupperingPaLag = groupBy(poengoversikt, 'lag');
    const poengoversiktSomListe = [];
    forIn(grupperingPaLag, (lag, key) => {
      const plassering = [];
      forIn(lag, deltakelse => plassering.push(ANTALL_MULIGE_PLASSER - deltakelse.plassering));
      const sum = plassering.reduce((acc, value) => {
        return acc + value;
      }, 0);
      poengoversiktSomListe.push({
        nummer: key,
        plassering: sum,
      });
    });
    return poengoversiktSomListe;
  },
  byggPoengoversikt (poengoversikt) {
    const poengoversiktVisning = [];
    forIn(poengoversikt, poengobjekt => {
      poengoversiktVisning.push(poengobjekt);
    });
    this.setState({poengoversiktPerLag: this.byggOversiktEtterLagOgPoeng(poengoversiktVisning)});
  },
  skrivUtListe () {
    const poengoversiktListe = this.state.poengoversiktPerLag;
    const sortertListe = orderBy(poengoversiktListe, 'plassering', 'desc');
    return sortertListe.map((lagOversikt, key) => {
      const lagObjekt = lagene.find(lag => lag.nummer === lagOversikt.nummer);
      return {
        plassering: key + 1,
        lag: `Lag ${lagObjekt.navn}`,
        antallPoeng: `${lagOversikt.plassering} poeng`,
      };
    });
  },
  render () {
    const kolonner = [
      {key: 'plassering', label: 'Plassering'},
      {key: 'lag', label: 'Lag'},
      {key: 'antallPoeng', label: 'Poeng'},
    ];

    return (
        <div className="information pure-g information-container poengoversikt">
          <div className="pure-u-1">
            <div className="l-box">
              <h3 className="information-head tittel">Poengoversikt</h3>
              <p className="oversikt-info">På denne siden får dere hele tiden ferske oppdateringer på hvordan de forskjellige lagene gjør det i løpet av konkurransen</p>
              <h3 className="information-head team-h3">Team <span className="torunn">Torunn</span> vs. Team <span className="trond">Trond</span></h3>
              <TorunnVsTrond poengoversiktPerLag={this.state.poengoversiktPerLag}/>
              <h3 className="information-head">Lagoversikt</h3>
              <Table className="pameldte" columns={kolonner} data={this.skrivUtListe()}/>
              <ul>{this.skrivUtListe()}</ul>
            </div>
          </div>
        </div>
    );
  },
});

export default Poengoversikt;
