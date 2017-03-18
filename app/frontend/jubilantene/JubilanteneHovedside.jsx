import React from 'react';
import Jubilantene from './Jubilantene.jsx';
import JubilanteneMobil from './JubilanteneMobil.jsx';
import { jubilantene } from './informasjon.js';

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
