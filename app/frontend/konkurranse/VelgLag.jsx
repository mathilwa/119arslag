import React from 'react';

const VelgLag = ({velgLag}) => {
  return (
    <div>
      <label htmlFor="post">Velg hvilket lag du skal gi poeng</label>
      <select className="post-nedtrekksliste input-select" id="post" name="post" onChange={(event) => velgLag(event.target.value)}>
        <option value="">Velg lag</option>
        <option value="1">Lag 1</option>
        <option value="2">Lag 2</option>
        <option value="3">Lag 3</option>
        <option value="4">Lag 4</option>
        <option value="5">Lag 5</option>
        <option value="6">Lag 6</option>
        <option value="7">Lag 7</option>
        <option value="8">Lag 8</option>
      </select>
    </div>
  );
};

export default VelgLag;
