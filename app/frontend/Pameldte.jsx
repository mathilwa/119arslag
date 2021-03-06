import React from 'react';
import 'whatwg-fetch';
import { forIn } from 'lodash';
import { Table } from 'reactable';

const kolonner = [
  {key: 'navn', label: 'Navn'},
  {key: 'folge', label: 'Følge'},
  {key: 'kommentar', label: 'Kommentar'},
];

const kolonnerMobilvisning = [
  {key: 'navn', label: 'Navn'},
];

const Pameldte = React.createClass({
  getInitialState () {
    return {
      pameldte: {},
      pameldteForVisning: [],
      pameldteMobilvisning: [],
    };
  },
  componentDidMount () {
    fetch('https://torunnogtrond.firebaseio.com/pameldte.json').then(response => {
      if (response.ok) {
        response.json().then(pameldte => {
          this.byggPameldteObjektForVisning(pameldte);
          this.byggPameldtlisteForMobilvisning(pameldte);
        });
      }
    }).catch(() => {
      console.log('Kunne ikke hente påmeldte');
    });
  },
  hentFolge (pameldt) {
    return pameldt.folge ? pameldt.folge.map(folge => folge) : '';
  },
  byggPameldteObjektForVisning (pameldte) {
    const pameldteForVisning = [];
    forIn(pameldte, pameldt => {
      const pameldtForVisning = {
        navn: pameldt.navn,
        folge: this.hentFolge(pameldt),
        kommentar: pameldt.ekstraInformasjon,
      };
      pameldteForVisning.push(pameldtForVisning);
    });
    this.setState({pameldteForVisning: pameldteForVisning});
  },
  byggPameldtlisteForMobilvisning (pameldte) {
    const pameldtliste = [];
    forIn(pameldte, pameldt => {
      pameldtliste.push({navn: pameldt.navn});
      if (pameldt.folge) {
        pameldtliste.push({navn: this.hentFolge(pameldt)});
      }
    });
    this.setState({pameldteMobilvisning: pameldtliste});
  },
  render () {
    return (
        <div className="information pameldte-container pure-g">
          <div className="pure-u-1">
            <div className="l-box">
              <h3 className="information-head">
                Alle påmeldte
              </h3>
              <Table className="pameldte pameldte-stor-skjerm" columns={kolonner} data={this.state.pameldteForVisning}/>
              <Table className="pameldte pameldte-mobil" columns={kolonnerMobilvisning} data={this.state.pameldteMobilvisning}/>
            </div>
          </div>
        </div>
    );
  },
});

export default Pameldte;
