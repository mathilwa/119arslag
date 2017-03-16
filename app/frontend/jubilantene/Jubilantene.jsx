import React from 'react';
import Informasjonsblokk from './Informasjonsblokk.jsx';
import { JUBILANT_BEGGE, JUBILANT_TORUNN } from './JubilanteneHovedside.jsx';

const informasjonenForanIListaGjelderForTorunn = (informasjonOmJubilantene, index) => informasjonOmJubilantene[index - 1].jubilant === JUBILANT_TORUNN;
const informasjonenGjelderForBegge = (informasjon) => informasjon.jubilant === JUBILANT_BEGGE;

const Jubilantene = ({informasjonOmJubilantene}) => {
  const fordeltInformasjonOmBeggeTilBadeHoyreOgVenstre = informasjonOmJubilantene.map((informasjon, index) => {
    if (index > 0 && informasjonenGjelderForBegge(informasjon)) {
      if (informasjonenForanIListaGjelderForTorunn(informasjonOmJubilantene, index)) {
        return Object.assign({}, informasjon, { jubilant: 'hoyre'});
      }
      return informasjon;
    }
    return informasjon;
  });


  return (
    <div className="jubilantene">
      <Informasjonsblokk informasjonOmJubilantene={fordeltInformasjonOmBeggeTilBadeHoyreOgVenstre}/>
    </div>
  );
};

Jubilantene.propTypes = {
  informasjonOmJubilantene: React.PropTypes.array.isRequired,
};

export default Jubilantene;
