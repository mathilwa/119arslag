import React from 'react';
import { browserHistory } from 'react-router';
import classNames from 'classnames';
import MenyIkon from './MenyIkon.jsx';

const menyElementer = [
  { url: '/', menyElementTekst: '119årslag'},
  { url: '/pamelding', menyElementTekst: 'Påmelding'},
  { url: '/overnatting', menyElementTekst: 'Overnatting'},
  { url: '/jubilantene', menyElementTekst: 'Jubilantene'},
];

const Meny = React.createClass({
  propTypes: {
    antallPameldte: React.PropTypes.number.isRequired,
    valgtMenyelement: React.PropTypes.string.isRequired,
  },
  getInitialState () {
    return {
      menyErApen: false,
    };
  },
  toggleMeny () {
    this.setState({menyErApen: !this.state.menyErApen});
  },
  velgElement (menyElement) {
    browserHistory.push(menyElement.url);
    this.toggleMeny();
  },
  listUtMenyElementer () {
    return menyElementer.map((menyElement, key) => {
      const className = classNames({
        'pure-menu-item': true,
        'pure-menu-selected': this.props.valgtMenyelement === menyElement.url,
      });
      return (
          <li key={key} className={className}>
            <a className="pure-menu-link"
               onClick={() => this.velgElement(menyElement)}>{menyElement.menyElementTekst}</a>
          </li>
      );
    });
  },
  render () {
    const className = classNames({
      'pure-menu-list': true,
      'open': this.state.menyErApen,
    });

    return (
      <div className="pure-menu-container">
        <div className="pure-menu">
          <MenyIkon menyErApen={this.state.menyErApen} toggleMeny={this.toggleMeny}/>
          <ul className={className}>
            {this.listUtMenyElementer()}
          </ul>
          <div className=" pure-menu-list antall-pameldte"><span
              className="pure-menu-link">Antall påmeldte: {this.props.antallPameldte}</span></div>
        </div>
      </div>
    );
  },
});

export default Meny;
