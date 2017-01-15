import React from 'react';
import { browserHistory } from 'react-router';
import classNames from 'classnames';

const Meny = ({antallPameldte, valgtMenyelement}) => {
  const menyElementer = [
    { url: '/', menyElementTekst: '119årslag'},
    { url: '/pamelding', menyElementTekst: 'Påmelding'},
    { url: '/overnatting', menyElementTekst: 'Overnatting'},
  ];

  const listUtMenyElementer = menyElementer.map((menyElement, key) => {
    const className = classNames({
      'pure-menu-item': true,
      'pure-menu-selected': valgtMenyelement === menyElement.url,
    });
    return (
      <li key={key} className={className}>
        <a className="pure-menu-link" onClick={() => browserHistory.push(menyElement.url)}>{menyElement.menyElementTekst}</a>
      </li>
    );
  });

  return (
      <div className="pure-menu pure-menu-horizontal">
        <ul className="pure-menu-list">
          {listUtMenyElementer}
        </ul>
        <div className=" pure-menu-list antall-pameldte"><span className="pure-menu-link">Antall påmeldte: {antallPameldte}</span></div>
      </div>
  );
};

Meny.propTypes = {
  antallPameldte: React.PropTypes.number.isRequired,
  valgtMenyelement: React.PropTypes.string.isRequired,
};

export default Meny;
