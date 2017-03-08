import React from 'react';

const Aarstall = ({aarstall}) => {
  return (
    <div className="cd-timeline-img">
      <div className="aar">{aarstall}</div>
    </div>
  );
};

Aarstall.propTypes = {
  aarstall: React.PropTypes.string,
};

export default Aarstall;
