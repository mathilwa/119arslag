import { JUBILANT_TROND, JUBILANT_TORUNN } from './../jubilantene/informasjon.js';

export const lagene = [
  {
    nummer: '1',
    navn: 'Blå',
    tilhorer: JUBILANT_TROND,
  }, {
    nummer: '2',
    navn: 'Grønn',
    tilhorer: JUBILANT_TROND,
  }, {
    nummer: '3',
    navn: 'Rosa',
    tilhorer: JUBILANT_TORUNN,
  }, {
    nummer: '4',
    navn: 'Rød',
    tilhorer: JUBILANT_TORUNN,
  }, {
    nummer: '5',
    navn: 'Svart',
    tilhorer: JUBILANT_TROND,
  }, {
    nummer: '6',
    navn: 'Gul',
    tilhorer: JUBILANT_TORUNN,
  }, {
    nummer: '7',
    navn: 'Hvit',
    tilhorer: JUBILANT_TROND,
  }, {
    nummer: '8',
    navn: 'Oransje',
    tilhorer: JUBILANT_TORUNN,
  },
];

export const finnLag = (nummerPaLag) => lagene.find(lag => lag.nummer === nummerPaLag);
