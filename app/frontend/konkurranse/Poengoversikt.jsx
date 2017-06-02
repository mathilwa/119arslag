import React from 'react';
import { forIn, groupBy, orderBy } from 'lodash';
import { Table } from 'reactable';
import { finnLag } from './lagene.js';
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
  oppdaterListeMedPlassering (sortertListe) {
    const oppdatertListeMedPlassering = [];
    sortertListe.map((lagOversikt, index) => {
      const lagObjekt = finnLag(lagOversikt.nummer);
      if (index === 0) {
        oppdatertListeMedPlassering.push(Object.assign({lag: `Lag ${lagObjekt.navn}`, plassering: 1}));
        return;
      }
      const forrigePoeng = oppdatertListeMedPlassering[index - 1];

      if (lagOversikt.plassering === forrigePoeng.plassering) {
        oppdatertListeMedPlassering.push(Object.assign({lag: `Lag ${lagObjekt.navn}`, plassering: forrigePoeng.plassering}));
      } else {
        oppdatertListeMedPlassering.push(Object.assign({lag: `Lag ${lagObjekt.navn}`, plassering: index + 1}));
      }
    });
    return oppdatertListeMedPlassering;
  },
  skrivUtListe () {
    const poengoversiktListe = this.state.poengoversiktPerLag;
    const sortertListe = orderBy(poengoversiktListe, 'plassering', 'desc');
    return this.oppdaterListeMedPlassering(sortertListe);
  },
  render () {
    const kolonner = [
      {key: 'plassering', label: 'Plass'},
      {key: 'lag', label: 'Lag'},
    ];
    return (
        <div className="information pure-g information-container poengoversikt">
          <div className="pure-u-1">
            <div className="l-box">
              <h3 className="information-head tittel">Poengoversikt</h3>
              <p className="oversikt-info">På denne siden får dere hele tiden ferske oppdateringer på hvordan de forskjellige lagene gjør det i løpet av konkurransen</p>
              <h3 className="information-head team-h3 skjerm">Team <span className="torunn">Torunn</span> vs. Team <span className="trond">Trond</span></h3>
              <h3 className="information-head team-h3 mobil"><span className="torunn">Torunn</span> vs. <span className="trond">Trond</span></h3>
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
