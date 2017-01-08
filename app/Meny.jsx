import React from 'react';
import { Link, browserHistory } from 'react-router';

const Meny = () => {
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
            <a className="pure-menu-link" onClick={() => browserHistory.push('/informasjon')}>Informasjon</a>
          </li>
          <li className="pure-menu-item">
            <a className="pure-menu-link" onClick={() => browserHistory.push('/kontakt')}>Kontakt</a>
          </li>
        </ul>
      </div>
  );
};

export default Meny;