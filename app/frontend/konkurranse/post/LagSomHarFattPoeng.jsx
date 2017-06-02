import React from 'react';
import { sortBy } from 'lodash';
import { Table } from 'reactable';
import { mapPoeng } from './../poengMapping.js';
import { finnLag } from './../lagene.js';
import { finnPost, POENGTYPE_TID } from './../postene.js';

const LagSomHarFattPoeng = ({poengoversiktForPost, poengLabel}) => {
  const post = finnPost(poengoversiktForPost[0].post);
  const poengtype = post.poengtype;

  const kolonner = [
    {key: 'plassering', label: 'Plass'},
    {key: 'lag', label: 'Lag'},
    {key: 'antallPoeng', label: poengLabel},
    {key: 'bonusValg', label: 'Bonus?'},
  ];
  const poengLabelForMobil = poengtype === POENGTYPE_TID ? 'Tid' : 'Poeng';
  const kolonnerMobil = [
    {key: 'plassering', label: 'Plass'},
    {key: 'lag', label: 'Lag'},
    {key: 'antallPoeng', label: poengLabelForMobil},
    {key: 'bonusValg', label: 'Bonus?'},
  ];

  const poengoversiktMedPoengmapping = poengoversiktForPost.map(oversikt => {
    const lag = finnLag(oversikt.lag);
    return Object.assign({}, oversikt, {
      antallPoeng: mapPoeng(oversikt.post, oversikt.antallPoeng),
      bonusValg: oversikt.bonusValg ? 'Ja' : '-',
      lag: `Lag ${lag.navn}`,
    });
  });

  const poengoversiktMedPoengmappingForMobil = poengoversiktForPost.map(oversikt => {
    const lag = finnLag(oversikt.lag);
    return Object.assign({}, oversikt, {
      antallPoeng: mapPoeng(oversikt.post, oversikt.antallPoeng),
      bonusValg: oversikt.bonusValg ? 'Ja' : '-',
      lag: lag.navn,
    });
  });

  const sortertPaPoeng = sortBy(poengoversiktMedPoengmapping, 'plassering');
  const sortertPaPoengForMobil = sortBy(poengoversiktMedPoengmappingForMobil, 'plassering');
  return (
    <div>
      <h3 className="information-head">Poengoversikt</h3>
      <Table className="pameldte postoversikt-skjerm" columns={kolonner} data={sortertPaPoeng}/>
      <Table className="pameldte postoversikt-mobil" columns={kolonnerMobil} data={sortertPaPoengForMobil}/>
    </div>
  );
};

LagSomHarFattPoeng.propTypes = {
  poengoversiktForPost: React.PropTypes.array.isRequired,
  poengLabel: React.PropTypes.string.isRequired,
};

export default LagSomHarFattPoeng;
