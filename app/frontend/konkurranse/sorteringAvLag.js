import { orderBy } from 'lodash';
import { POENGTYPE_TID, finnPost } from './postene.js';

export const angiPlasseringForLag = (alleRegistrerteLag, nummerPaPost) => {
  const post = finnPost(nummerPaPost);
  const sorteringstype = post.poengtype === POENGTYPE_TID ? 'asc' : 'desc';
  const registrerteLagSortertPaPoeng = orderBy(alleRegistrerteLag, 'antallPoeng', sorteringstype);
  return registrerteLagSortertPaPoeng.map((lag, index) => Object.assign({}, lag, {plassering: index + 1}));
};
