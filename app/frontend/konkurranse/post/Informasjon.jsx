import React from 'react';

const Informasjon = ({informasjon}) => {
  return (
    <div>
      <h3 className="information-head">Om posten</h3>
      <p>{informasjon}</p>
    </div>
  );
};

Informasjon.propTypes = {
  informasjon: React.PropTypes.string.isRequired,
};

export default Informasjon;
