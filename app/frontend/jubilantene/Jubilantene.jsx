import React from 'react';
import Informasjonsblokk from './Informasjonsblokk.jsx';

const Jubilantene = ({informasjonOmJubilantene}) => {
  return (
    <div className="jubilantene">
      <Informasjonsblokk informasjonOmJubilantene={informasjonOmJubilantene}/>
    </div>
  );
};

Jubilantene.propTypes = {
  informasjonOmJubilantene: React.PropTypes.array.isRequired,
};

export default Jubilantene;
