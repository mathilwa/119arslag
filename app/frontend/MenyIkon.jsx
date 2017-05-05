import React from 'react';
import classNames from 'classnames';

const MenyIkon = ({menyErApen, toggleMeny}) => {
  const className = classNames({
    'menu-icon': true,
    'open': menyErApen,
  });

  return (
    <div className={className} onClick={toggleMeny}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

MenyIkon.propTypes = {
  menyErApen: React.PropTypes.bool.isRequired,
  toggleMeny: React.PropTypes.func.isRequired,
};


export default MenyIkon;
