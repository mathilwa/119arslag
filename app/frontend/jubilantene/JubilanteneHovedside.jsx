import React from 'react';
import Jubilantene from './Jubilantene.jsx';
import JubilanteneMobil from './JubilanteneMobil.jsx';

export const JUBILANT_TROND = 'trond';
export const JUBILANT_TORUNN = 'torunn';

const jubilantene = [
  {
    aar: '1957',
    jubilant: JUBILANT_TORUNN,
    tittel: 'Torunn kommer til verden',
    tekst: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hicplaceat iure tempora laudantium ipsa ad debitis unde?',
    bildeUrl: 'img/Torunn/Torunn_1år.jpg',
  }, {
    aar: '1958',
    jubilant: JUBILANT_TROND,
    tittel: 'Lille Trond blir født',
    tekst: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hicquasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis quiut.',
    bildeUrl: 'img/Trond/nyfødt.jpg',
  }, {
    aar: '1962',
    jubilant: JUBILANT_TORUNN,
    tittel: 'Jente på gård',
    tekst: 'Som liten jente vokste Torunn opp på en liten gård på Haugland utenfor Os, med mamma Dorotha og bror Tormod.',
    bildeUrl: 'img/Torunn/born0016.JPG',
  }, {
    aar: '1962',
    jubilant: JUBILANT_TROND,
    tittel: 'Gutt i søskenflokken',
    tekst: 'Som enn så lenge eneste gutt i søskenflokken prøver lille Trond sitt beste for å passe inn.',
    bildeUrl: 'img/Trond/pappa i kjole.jpg',
  }, {
    aar: '1972',
    jubilant: JUBILANT_TORUNN,
    tittel: 'Torunn blir konfirmert i Os Kyrkje',
    tekst: 'Blabla.',
    bildeUrl: 'img/Torunn/Torunn0005.JPG',
  }, {
    aar: '1973',
    jubilant: JUBILANT_TROND,
    tittel: 'Trond blir konfirmert',
    tekst: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    bildeUrl: 'img/Trond/Konfirmasjon.jpg',
  }, {
    aar: '1976',
    jubilant: JUBILANT_TORUNN,
    tittel: 'Første kvinne i militæret',
    tekst: 'I 1976 flyttet Torunn til Lillehammer/Jørstadmoen for å begynne på Radioskolen for hærens samband, og ble med dette Norges første kvinne i militæret.',
    bildeUrl: 'img/Torunn/Torunn_militæret.jpg',
  },
];

const byggBarn = (element) => {
  const barn = [];
  for (let i = 0; i < element.children.length; i++) {
    barn.push(element.children[i]);
  }
  return barn;
};

const JubilanteneHovedside = React.createClass({
  componentDidMount () {
    const tidslinjeBlokk = document.getElementsByClassName('tidslinje-blokk');
    const tidslinjeElementListe = [];
    for (let i = 0; i < tidslinjeBlokk.length; i++) {
      tidslinjeElementListe.push({
        element: tidslinjeBlokk[i],
        barn: byggBarn(tidslinjeBlokk[i]),
      });
    }
    tidslinjeElementListe.map(element => {
      if (element.element.offsetTop > window.top.scrollY + window.innerHeight * 0.75) {
        element.barn.map(barn => {
          barn.classList.add('is-hidden');
        });
      }
    });
    window.addEventListener('scroll', () => this.settSynlighet(tidslinjeElementListe));
  },
  componentWillUnmount () {
    window.removeEventListener('scroll');
  },
  settSynlighet (tidslinjeElementListe) {
    tidslinjeElementListe.forEach(element => {
      const childrenClassList = element.barn.map(barn => barn.className.toString());
      if (element.element.offsetTop <= window.top.scrollY + window.innerHeight * 0.75 && childrenClassList[0].includes('is-hidden')) {
        element.barn.forEach(barn => barn.classList.remove('is-hidden'));
        element.barn.forEach(barn => barn.classList.add('bounce-in'));
      }
    });
  },
  render () {
    return (
      <div className="information pure-g">
        <div className="pure-u-1">
          <div className="l-box">
            <h3 className="information-head">Bli kjent med jubilantene</h3>
              <Jubilantene informasjonOmJubilantene={jubilantene}/>
              <JubilanteneMobil informasjonOmJubilantene={jubilantene}/>
            </div>
          </div>
      </div>
    );
  },
});

export default JubilanteneHovedside;
