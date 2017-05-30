import React from 'react';
import { forIn, groupBy, orderBy } from 'lodash';
import { lagene } from './lagene.js';
import TorunnVsTrond from './TorunnVsTrond.jsx';


const Poengoversikt = React.createClass({
  getInitialState () {
    return {
      poengoversiktPerLag: [],
    };
  },
  componentDidMount () {
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
      forIn(lag, deltakelse => plassering.push(deltakelse.plassering));
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
      return <li key={key}>Lag {lagOversikt.nummer} - {lagObjekt.navn} - {lagOversikt.plassering}</li>;
    });
  },
  render () {
    return (
        <div className="information pure-g information-container">
          <div className="pure-u-1">
            <div className="l-box">
              <h1 className="information-head">Poengoversikt</h1>
              <h3 className="information-head">Team Torunn vs. Team Trond</h3>
              <TorunnVsTrond poengoversiktPerLag={this.state.poengoversiktPerLag}/>
              <h3 className="information-head">Lagoversikt</h3>
              <ul>{this.skrivUtListe()}</ul>
            </div>
          </div>
        </div>
    );
  },
});

export default Poengoversikt;
