import { sortBy } from 'lodash';

export const angiPlasseringForLag = (alleRegistrerteLag) => {
  const registrerteLagSortertPaPoeng = sortBy(alleRegistrerteLag, 'antallPoeng');
  return registrerteLagSortertPaPoeng.map((lag, index) => Object.assign({}, lag, {plassering: index + 1}));
};
