import React from 'react';

const Aarstall = ({aarstall}) => {
  return (
    <div className="tidslinje-aarstall">
      <div className="aar">{aarstall}</div>
    </div>
  );
};

Aarstall.propTypes = {
  aarstall: React.PropTypes.string,
};

export default Aarstall;
