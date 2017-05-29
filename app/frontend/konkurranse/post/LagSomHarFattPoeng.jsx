import React from 'react';
import { Table } from 'reactable';

const LagSomHarFattPoeng = ({poengoversiktForPost, poengLabel}) => {
  const kolonner = [
    {key: 'lag', label: 'Lag'},
    {key: 'antallPoeng', label: poengLabel},
    {key: 'bonusValg', label: 'Bonus?'},
  ];
  return (
    <div>
      <h3 className="information-head">Poengoversikt</h3>
      <Table className="pameldte" columns={kolonner} data={poengoversiktForPost}/>
    </div>
  );
};

LagSomHarFattPoeng.propTypes = {
  poengoversiktForPost: React.PropTypes.array.isRequired,
  poengLabel: React.PropTypes.string.isRequired,
};

export default LagSomHarFattPoeng;
