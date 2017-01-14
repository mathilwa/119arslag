import React from 'react';
import { browserHistory } from 'react-router';

const Invitasjon = () => {
  return (
      <div className="information pricing-tables pure-g">
        <div className="pure-u-1">
          <div className="pricing-table pricing-table-free ga-til-pamelding-table">
            <div className="pricing-table-header">
              <h2>Ønsker du å være med på dette?</h2>
              <span className="pricing-table-price ga-til-pamelding" onClick={() => browserHistory.push('/pamelding')}>Gå til påmelding!</span>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Invitasjon;
