import React from 'react';
import { sortBy } from 'lodash';
import { Table } from 'reactable';
import { mapPoeng } from './../poengMapping.js';

const LagSomHarFattPoeng = ({poengoversiktForPost, poengLabel}) => {
  const kolonner = [
    {key: 'plassering', label: 'Plassering'},
    {key: 'lag', label: 'Lag'},
    {key: 'antallPoeng', label: poengLabel},
    {key: 'bonusValg', label: 'Bonus?'},
  ];
  const poengoversiktMedPoengmapping = poengoversiktForPost.map(oversikt => {
    return Object.assign({}, oversikt, {antallPoeng: mapPoeng(oversikt.post, oversikt.antallPoeng), bonusValg: oversikt.bonusValg ? 'Ja' : '-'});
  });

  const sortertPaPoeng = sortBy(poengoversiktMedPoengmapping, 'plassering');
  return (
    <div>
      <h3 className="information-head">Poengoversikt</h3>
      <Table className="pameldte" columns={kolonner} data={sortertPaPoeng}/>
    </div>
  );
};

LagSomHarFattPoeng.propTypes = {
  poengoversiktForPost: React.PropTypes.array.isRequired,
  poengLabel: React.PropTypes.string.isRequired,
};

export default LagSomHarFattPoeng;
