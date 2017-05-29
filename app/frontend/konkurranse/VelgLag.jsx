import React from 'react';
import { sortBy, includes } from 'lodash';
import { lagene } from './lagene.js';

const skalDisables = (lagSomAlleredeHarFattPoeng, lag) => {
  const listeMedLag = lagSomAlleredeHarFattPoeng.map(lag => lag.lag);
  return includes(listeMedLag, lag.nummer);
};

const skrivUtOptions = (lagSomAlleredeHarFattPoeng) => {
  const sortertListe = sortBy(lagene, 'nummer');
  return sortertListe.map((lag, index) => <option key={index} value={lag.nummer} disabled={skalDisables(lagSomAlleredeHarFattPoeng, lag)}>Lag {lag.nummer} - {lag.navn}</option>);
};

const VelgLag = ({velgLag, lagSomAlleredeHarFattPoeng}) => {
  return (
    <div>
      <label htmlFor="post">Velg hvilket lag du skal gi poeng</label>
      <select className="post-nedtrekksliste input-select" id="post" name="post" onChange={(event) => velgLag(event.target.value)}>
        <option value="">Velg lag</option>
        {skrivUtOptions(lagSomAlleredeHarFattPoeng)}
      </select>
    </div>
  );
};

VelgLag.propTypes = {
  velgLag: React.PropTypes.func.isRequired,
  lagSomAlleredeHarFattPoeng: React.PropTypes.array.isRequired,
};

export default VelgLag;
