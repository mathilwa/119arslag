import React from 'react';
import Aarstall from './Aarstall.jsx';

const Informasjonsblokk = ({informasjonOmJubilantene}) => {
  return (
    <section id="tidslinje" className="tidslinje-container">
      {informasjonOmJubilantene.map(informasjon => {
        return (
          <div className={`tidslinje-blokk ${informasjon.jubilant}`}>
            <Aarstall aarstall={informasjon.aar}/>

            <div className="tidslinje-innhold">
              <h2>{informasjon.tittel}</h2>
              <p>{informasjon.tekst}</p>
              <img src={informasjon.bildeUrl}/>
            </div>
          </div>
        );
      })}
      <div className="tidslinje-blokk">
        <Aarstall aarstall="2017"/>
      </div>
    </section>
  );
};

Informasjonsblokk.propTypes = {
  informasjonOmJubilantene: React.PropTypes.array.isRequired,
};

export default Informasjonsblokk;
