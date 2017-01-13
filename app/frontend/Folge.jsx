import React from 'react';
import { times } from 'lodash';

const Folge = ({antallFolge, oppdaterAntallFolge, oppdaterFolge}) => {
  const pameldingsTekst = antallFolge > 0 ? 'Ønsker du å legge til flere?' : 'Ønsker du å legge til og melde på følge?';
  const knappTekst = antallFolge > 0 ? 'Legg til flere' : 'Legg til følge';
  return (
    <div className="pure-form-stacked">
      <div>{pameldingsTekst}</div>
      <button className="pure-button legg-til-folge" type="submit" onClick={oppdaterAntallFolge}>{knappTekst}</button>
      {times(antallFolge, (key) => {
        return <input className="tekstinput" type="text" key={key} placeholder="Navn på følge" onChange={event => oppdaterFolge(event, key)}/>;
      })}
    </div>
  );
};

Folge.propTypes = {
  antallFolge: React.PropTypes.number.isRequired,
  oppdaterAntallFolge: React.PropTypes.func.isRequired,
  oppdaterFolge: React.PropTypes.func.isRequired,
};

export default Folge;
