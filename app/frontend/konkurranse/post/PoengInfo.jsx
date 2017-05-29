import React from 'react';

const PoengInfo = ({poenginfo}) => {
  return (
    <div>
      <h3 className="information-head">Poenggiving</h3>
      <p>{poenginfo}</p>
    </div>
  );
};

PoengInfo.propTypes = {
  poenginfo: React.PropTypes.string.isRequired,
};

export default PoengInfo;
