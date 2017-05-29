import React from 'react';

const Hvor = ({hvor}) => {
  return (
    <div>
      <h3 className="information-head">Hvor</h3>
      <p>{hvor}</p>
    </div>
  );
};

Hvor.propTypes = {
  hvor: React.PropTypes.string.isRequired,
};

export default Hvor;
