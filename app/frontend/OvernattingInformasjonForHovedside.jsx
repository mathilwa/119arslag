import React from 'react';
import { browserHistory } from 'react-router';

const OvernattingInformasjonForHovedside = () => {
  return (
      <p>
        For de som enda ikke har ordnet sted å sove, er dette fortsatt mulig å få til. Ta først en titt på <a href="" onClick={() => browserHistory.push('/overnatting')}>siden om overnatting</a>,
        og om det skal vise seg å være fullt kan dere ta kontakt med Mathilde, så fikser vi sengeplass og tak over hodet!
      </p>
  );
};

export default OvernattingInformasjonForHovedside;
