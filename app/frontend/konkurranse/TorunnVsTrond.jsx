import React from 'react';
import PieChart from 'react-minimal-pie-chart';
import { JUBILANT_TROND, JUBILANT_TORUNN } from './../jubilantene/informasjon.js';
import { finnLag } from './lagene.js';
import { isEmpty } from 'lodash';

const hentPoengFor = (jubilant, poengoversiktPerLag) => {
  console.log(poengoversiktPerLag);
  const sum = poengoversiktPerLag.reduce((acc, lagOversikt) => {
    const lag = finnLag(lagOversikt.nummer);
    if (lag.tilhorer === jubilant) {
      return acc + lagOversikt.plassering;
    }
    return acc;
  }, 0);

  console.log(sum);
  return sum;
};

const TorunnVsTrond = ({poengoversiktPerLag}) => {
  if (isEmpty(poengoversiktPerLag)) {
    return <noscript/>;
  }
  return (
    <div className="torunn-vs-trond">
        <PieChart
            data={[
              { value: hentPoengFor(JUBILANT_TORUNN, poengoversiktPerLag), key: 1, color: '#C197E2' },
              { value: hentPoengFor(JUBILANT_TROND, poengoversiktPerLag), key: 2, color: '#d7e4ed' },
            ]}
        />
    </div>
  );
};

export default TorunnVsTrond;
