import React from 'react';
import { sortBy } from 'lodash';
import { lagene } from './lagene.js';

const skrivUtOptions = () => {
  const sortertListe = sortBy(lagene, 'nummer');
  return sortertListe.map((lag, index) => <option key={index} value={lag.nummer}>Lag {lag.nummer} - {lag.navn}</option>);
};

const VelgLag = ({velgLag}) => {
  return (
    <div>
      <label htmlFor="post">Velg hvilket lag du skal gi poeng</label>
      <select className="post-nedtrekksliste input-select" id="post" name="post" onChange={(event) => velgLag(event.target.value)}>
        <option value="">Velg lag</option>
        {skrivUtOptions()}
      </select>
    </div>
  );
};

export default VelgLag;
