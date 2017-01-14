import React from 'react';
import { browserHistory } from 'react-router';

const OvernattingInformasjonForHovedside = () => {
  return (
      <p>
        Om det er ønskelig med overnatting bør man begynne å tenke på det relativt snart, da dette fort kan bli fullt. For mer informasjon, <a href="" onClick={() => browserHistory.push('/overnatting')}>gå til siden om overnatting.</a>
      </p>
  );
};

export default OvernattingInformasjonForHovedside;
