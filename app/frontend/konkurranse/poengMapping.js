import { isUndefined, isNull } from 'lodash';
import { postene, POENGTYPE_TID } from './postene.js';

export const mapPoeng = (nummerPaPost, antallPoeng) => {
  const post = postene.find(post => post.nummer === nummerPaPost);
  if (isUndefined(antallPoeng || isNull(antallPoeng))) {
    return '';
  } else if (post.poengtype === POENGTYPE_TID) {
    const antallMinutter = Math.floor(antallPoeng / 60);
    const antallSekunder = antallPoeng - (antallMinutter * 60);
    return `${antallMinutter} min ${antallSekunder} sek`;
  }
  return isNull(antallPoeng) ? '0' : antallPoeng.toString();
};
