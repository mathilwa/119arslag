import React from 'react';
import Jubilantene from './Jubilantene.jsx';
import JubilanteneMobil from './JubilanteneMobil.jsx';

export const JUBILANT_TROND = 'trond';
export const JUBILANT_TORUNN = 'torunn';
export const JUBILANT_BEGGE = 'begge';


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
    tekst: 'Som liten jente vokste Torunn opp på en liten gård på Haugland utenfor Os, med mamma Dorthea og bror Tormod.',
    bildeUrl: 'img/Torunn/born0016.JPG',
  }, {
    aar: '1962',
    jubilant: JUBILANT_TROND,
    tittel: 'Gutt i søskenflokken',
    tekst: 'Som enn så lenge eneste gutt i søskenflokken prøvde lille Trond sitt beste for å passe inn, her nummer to fra venstre i kjole.',
    bildeUrl: 'img/Trond/pappa i kjole.jpg',
  }, {
    aar: '1970',
    jubilant: JUBILANT_TORUNN,
    tittel: 'Leikarring',
    tekst: 'Torunn likte godt å danse, og gikk på gammeldanskurs og leikraring. Torunn var ikke på mange bygdedanser, men dansa når det var mulighet. Bildet her er fra avslutninga i 6. klasse. Dans var også hovedhobbyen da Torunn bodde i Trondheim. Hun var da med i BUL og danset gammeldans, selv om det var swing som var det store.',
    bildeUrl: 'img/Torunn/Leikarring.jpg',
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
  }, {
    aar: '1977',
    jubilant: JUBILANT_TORUNN,
    tittel: 'Til sjøs',
    tekst: 'Etter året i militæret tok Torunn med seg kunnskapen fra Radioskolen ut på havet for å arbeide som telegrafist. Hun fikk i ett helt år reise verden rundt, og fikk oppleve en helt annen verden enn hun hadde sett til nå.',
    bildeUrl: 'img/Torunn/Telegrafist.JPG',
  }, {
    aar: '1978',
    jubilant: JUBILANT_TORUNN,
    tittel: 'Hurtigruta',
    tekst: 'I 4 - 5 år hadde Torunn sommer- og julejobb på Hurtigruta. Dette førte til mange fine turer opp og ned langs norskekysten.',
    bildeUrl: 'img/Torunn/Hurtigruta5.JPG',
  }, {
    aar: '1986',
    jubilant: JUBILANT_BEGGE,
    tittel: 'Horten',
    tekst: 'Etter flere år i Trondheim flytter Torunn og Trond til Falkensten utenfor Horten.',
    bildeUrl: '',
  }, {
    aar: '1987',
    jubilant: JUBILANT_BEGGE,
    tittel: 'Torunn og Trond blir foreldre',
    tekst: 'Høsten 1987, kun ett år etter at Torunn og Trond flyttet til Horten, blir de foreldre til lille Mathilde.',
    bildeUrl: 'img/begge/1988_0002.jpg',
  }, {
    aar: '1990',
    jubilant: JUBILANT_BEGGE,
    tittel: 'Thomas blir født',
    tekst: 'I februar 1990 blir Torunn og Trond foreldre igjen, denne gangen til en nydelige, liten gutt som skulle få navnet Thomas.',
    bildeUrl: 'img/begge/Lille Thomas.jpg',
  }, {
    aar: '2004',
    jubilant: JUBILANT_TORUNN,
    tittel: 'På to hjul til Bergen',
    tekst: 'Sommeren 2004 tok Torunn med seg Mathilde og Thomas på den 50 mil lange sykkelturen fra Horten til Bergen. Turen gikk via Kongsberg, Geilo, Hardangervidda og Hardangerfjorden.',
    bildeUrl: 'img/Torunn/Sykkeltur.JPG',
  }, {
    aar: '2010',
    jubilant: JUBILANT_TORUNN,
    tittel: 'Oselveren',
    tekst: 'Torunn hadde som ung mange fantastiske sommerferier hjemme på Os. Reisene ble ikke så lange, men en rotur i oselveren til Kalneset var reise stor nok. Denne gleden sitter fortsatt i - en rotur er noe Torunn har stor glede av den dag i dag! I voksen alder har hun eid sin egen oselver, og denne ble brukt flittig på somrene i Horten, både på ro- og seilturer. Vaffelrøre ble laget og primusen ble pakket, før Torunn og barna kursen ut på småøyene. Her ble det stekt vafler, til alle andres misunnelse.',
    bildeUrl: 'img/Torunn/Torunn i robåt.jpg',
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
      <div className="jubilantene-side information pure-g">
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
