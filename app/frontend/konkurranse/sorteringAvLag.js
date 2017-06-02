import { orderBy, clone } from 'lodash';
import { POENGTYPE_TID, finnPost } from './postene.js';

const oppdaterListeMedLagplassering = (laglisteMedPoeng) => {
  const laglisteMedPlasseringer = clone(laglisteMedPoeng);
  laglisteMedPlasseringer.forEach((lag, index) => {
    if (index === 0) {
      laglisteMedPlasseringer[index] = Object.assign(lag, {plassering: 1});
      return;
    }
    const forrigePoeng = laglisteMedPlasseringer[index - 1];

    if (lag.poengMedBonus === forrigePoeng.poengMedBonus) {
      Object.assign(lag, {plassering: forrigePoeng.plassering});
    } else {
      Object.assign(lag, {plassering: index + 1});
    }
  });
  return laglisteMedPlasseringer;
};

const oppdaterPoengMedEventuelleBonuspoeng = (alleRegistrerteLag, post) => {
  return alleRegistrerteLag.map(lag => {
    if (lag.bonusValg) {
      const poengMedBonus = post.poengtype === POENGTYPE_TID ? (lag.antallPoeng * 0.8) : (lag.antallPoeng * 1.2);
      return Object.assign({}, lag, {poengMedBonus: poengMedBonus});
    }
    return Object.assign({}, lag, {poengMedBonus: lag.antallPoeng});
  });
};

export const angiPlasseringForLag = (alleRegistrerteLag, nummerPaPost) => {
  const post = finnPost(nummerPaPost);
  const poenglisteMedPoengInkludertBonus = oppdaterPoengMedEventuelleBonuspoeng(alleRegistrerteLag, post);

  const sorteringstype = post.poengtype === POENGTYPE_TID ? 'asc' : 'desc';
  const lagSortertEtterPoeng = orderBy(poenglisteMedPoengInkludertBonus, 'poengMedBonus', sorteringstype);
  return oppdaterListeMedLagplassering(lagSortertEtterPoeng);
};
