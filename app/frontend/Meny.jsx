import React from 'react';
import { Link, browserHistory } from 'react-router';

const Meny = ({antallPameldte}) => {
  return (
      <div className="pure-menu pure-menu-horizontal">
        <ul className="pure-menu-list">
          <li className="pure-menu-item">
            <a className="pure-menu-link" onClick={() => browserHistory.push('/')}>119årslag</a>
          </li>
          <li className="pure-menu-item">
            <a className="pure-menu-link" onClick={() => browserHistory.push('/pamelding')}>Påmelding</a>
          </li>
          <li className="pure-menu-item">
            <a className="pure-menu-link" onClick={() => browserHistory.push('/overnatting')}>Overnatting</a>
          </li>
        </ul>
        <div className=" pure-menu-list antall-pameldte"><span className="pure-menu-link">Antall påmeldte: {antallPameldte}</span></div>
      </div>
  );
};

Meny.propTypes = {
  antallPameldte: React.PropTypes.number.isRequired,
};

export default Meny;
