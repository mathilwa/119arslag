export const POENGTYPE_TID = 'Tid';
export const POENGTYPE_POENG = 'Poeng';

export const postene = [
  {
    nummer: '1',
    tittel: 'Midt i blinken',
    informasjon: 'Her skal lagene skyte med pil og bue. Hvert lag får skyte 6 piler/ganger, slik at alle på laget får skutt en gang hver.',
    poeng: 'Poeng skal registreres umiddelbart etter at laget er ferdig. Det som skal registreres på denne posten er total poengsum på de pilene som treffer blink. Om pilene må gjenbrukes må du summere opp underveis. ' +
    'Om du synes laget samarbeider spesielt godt, ved at de har god tone, mye engasjement, eller bare at alle blir inkludert, så kan du velge å huke av ' +
    'for ekstrapoeng. Når du gir poeng velger du hvilket lag du skal registrere for, fyller inn antall poeng laget klarte, og eventuelt huker av ' +
    'for godt teamarbeid.',
    poenglabel: 'Antall poeng',
    poengPlaceholder: 'Poeng',
    poengtype: POENGTYPE_POENG,
    hvor: '',
  }, {
    nummer: '2',
    tittel: 'Alt skal klaffe',
    informasjon: 'Laget blir presentert med et stort puslespill, bestående av brikker i forskjellige farger og former. Når laget ankommer plassen skal alle brikkene ligge utenfor brettet' +
    'med fargen opp. Laget får 10 minutter til å prøve å få brikkene på plass. Det er ikke lov å legge brikkene med fargen ned.',
    poeng: 'Poeng skal registreres umiddelbart etter at laget er ferdig. Det som skal registreres på denne posten er antall brikker laget klarer å sette på plass. Om du synes laget samarbeider spesielt godt, ved at de har god tone, mye engasjement, eller bare at' +
    'alle blir inkludert, så kan du velge å huke av for ekstrapoeng. Når du gir poeng velger du hvilket lag du skal registrere for, fyller inn antall brikker laget klarte, og eventuelt huker av ' +
    'for godt teamarbeid.',
    poenglabel: 'Antall brikker',
    poengPlaceholder: 'Antall',
    poengtype: POENGTYPE_POENG,
    hvor: '',
  }, {
    nummer: '3',
    tittel: 'Hva er dette?',
    informasjon: 'På denne posten blir laget presentert for diverse ord, sitater, bilder og musikk, hvor de skal gjengjenne hva dette er, eller hva det hører til. Laget får 10 minutter på ' +
    'oppgaven.',
    poeng: 'Poeng skal registreres umiddelbart etter at laget er ferdig. Det som skal registeres av poeng på denne posten er hvor mange av spørsmålene laget klarer. Om du synes laget samarbeider spesielt godt, ved at de har god tone, mye engasjement, eller bare at' +
    'alle blir inkludert, så kan du velge å huke av for ekstrapoeng. Når du gir poeng velger du hvilket lag du skal registrere for, fyller inn antall poeng laget klarte, og eventuelt huker av ' +
    'for godt teamarbeid.',
    poenglabel: 'Antall poeng',
    poengPlaceholder: 'Antall',
    poengtype: POENGTYPE_POENG,
    hvor: '',
  }, {
    nummer: '4',
    tittel: 'En (eller 4) knute(r) på tråden',
    informasjon: 'Her skal lagene får bryne seg på båtmannsknuter. Lagene skal bli presentert for fire knuter som er knytt opp på påler. De får navnene på disse, i tillegg til at de får ' +
    'observere de oppknytte knutene på avstand. Du starter klokka, og så er det opp til lagene å knyte disse fire knutene uten å se på fasiten. Du stopper tida når de sier seg ferdig, noterer ' +
    'og tida de er ferdige på og bedømmer resultatet. Knutene som skal knytes er \"Båtmannsstikk\", \"Åttetallsknop\", \"Dobbel Flaggstikk\" og \"Pålestikk\".',
    poeng: 'Poeng skal registreres umiddelbart etter at laget er ferdig. Det som skal registerers på denne posten er tid. For hver knute laget ikke har fått til får de straffetid på 2 minutter. Dette må lagene opplyses om når de kommer til posten. ' +
    'Den tiden du skal registrere er altså tiden laget er ferdig på, pluss eventuell straffetid. Om du synes laget samarbeider spesielt godt, ved at de har god tone, mye engasjement, eller bare at' +
    'alle blir inkludert, så kan du velge å huke av for ekstrapoeng. Når du gir poeng velger du hvilket lag du skal registrere for, fyller inn hvor lang tid laget brukte, og eventuelt huker av ' +
    'for godt teamarbeid.',
    poenglabel: 'Tid brukt',
    poengPlaceholder: 'Antall sekunder',
    poengtype: POENGTYPE_TID,
    hvor: '',
  }, {
    nummer: '5',
    tittel: 'Finn fjeset',
    informasjon: 'På denne posten skal lagene sette sammen et fullstendig fjes av Torunn og Trond. Fire bilder av Torunn og fire bilder av Trond er klippet opp i strimler. Kun ett bilde av ' +
    'hver av dem er fullstendig. De skal sette sammen et fullstendig bilde av Torunn og et av Trond på kortest mulig tid. Tiden stopper når de selv sier de er ferdige. Om de ikke er ferdige på ' +
    '10 minutter vil laget få straffetid.',
    poeng: 'Poeng skal registreres umiddelbart etter at laget er ferdig. Det som skal registreres på denne posten er hvor lang tid laget bruker på å sette sammen to fullstendige bilder. Om laget ikke er ferdig innen 10 minutter så skal du registrere ' +
    '10 minutter pluss 2 minutter straffetid per bilde som ikke er ferdig. Om du synes laget samarbeider spesielt godt, ved at de har god tone, mye engasjement, eller bare at' +
    'alle blir inkludert, så kan du velge å huke av for ekstrapoeng. Når du gir poeng velger du hvilket lag du skal registrere for, fyller inn hvor lang tid laget brukte, og eventuelt huker av ' +
    'for godt teamarbeid.',
    poenglabel: 'Tid',
    poengPlaceholder: 'Sekunder',
    poengtype: POENGTYPE_TID,
    hvor: '',
  }, {
    nummer: '6',
    tittel: 'La oss sjekke ståa på hukommelsen',
    informasjon: 'På denne posten skal lagene leke det som kalles \"Kims lek\". På et brett under et teppe ligger det 40 ting. Du starter klokka, fjerner teppet, og lar lagene kikke' +
    'i 2 minutter. De får ikke lov til å snakke sammen i løpet av de 2 minuttene, og det er ikke lov til å ta bilder eller notere. Når det har gått 2 minutter legger du teppet på igjen. ' +
    'Laget får deretter 6 minutter til å notere ned så mange ting de husker. Du samler inn arket når de 6 minuttene har gått inn samler du inn arket.',
    poeng: 'Poeng skal registreres umiddelbart etter at laget er ferdig. Det som skal registreres av poeng på denne posten er hvor mange riktige ting på brettet laget husker. Om de har gjettet ting som helt klart er feil så vil de få et halv minuspoeng. ' +
    'Det som ikke vil gi minuspoeng er om de for eksempel har skrevet håndkle i stedet for duk, eller annet som det går an å ta feil av. Ta kontakt med meg (Mathilde) om du er ' +
    'usikker! Om du synes laget samarbeider spesielt godt, ved at de har god tone, mye engasjement, eller bare at alle blir inkludert, så kan du velge å huke av for ekstrapoeng. ' +
    'Når du gir poeng velger du hvilket lag du skal registrere for, fyller inn antall ting laget husket, og eventuelt huker av for godt teamarbeid.',
    poenglabel: 'Antall ting',
    poengPlaceholder: 'Antall',
    poengtype: POENGTYPE_POENG,
    hvor: '',
  }, {
    nummer: '7',
    tittel: 'Ordbonanza',
    informasjon: 'På denne posten skal laget sette sammen bokstaver og lage så mange ord som mulig. Bokstavene som brukes er disse i denne setningen \"Jubilantene. Torunn og Trond\". ' +
    'Bokstavene skal ligge klart slik at de former denne setningen før hvert lag kommer til posten. Om et lag nærmer seg før du er klar så be dem om å vente. Ordene må være på tre bokstaver ' +
    'eller flere, og de må finnes i bokmålsordboka. Laget får 6 minutter til å sette sammen ordene.',
    poeng: 'Poeng skal registreres umiddelbart etter at laget er ferdig. Poeng gis etter hvor mange ord man klarer. 10 godkjente ord gir 10 poeng. Om du synes laget samarbeider spesielt godt, ved at de har god tone, mye engasjement, eller bare at' +
    'alle blir inkludert, så kan du velge å huke av for ekstrapoeng. Når du gir poeng velger du hvilket lag du skal registrere for, fyller inn antall ord laget klarte, og eventuelt huker av ' +
    'for godt teamarbeid.',
    poenglabel: 'Antall ord',
    poengPlaceholder: 'Antall',
    poengtype: POENGTYPE_POENG,
    hvor: 'Blabla',
  }, {
    nummer: '8',
    tittel: 'Klarer du gåten?',
    informasjon: 'På denne posten skal lagene gjennom en serie med små gåter for å til slutt åpne en boks med en ringeklokke oppi. Du starter tiden og stopper den når laget plinger på ' +
    'ringeklokka. Du skal få presentert gåtene på forhånd, og du har også mulighet til å gi hint underveis. Lagene har mulighet til å få 4 hint, men det kan minimum 2 minutter mellom hvert ' +
    'hint. Et hint vil gi en tilleggstid på 30 sekunder. Laget får maks 12 minutter på oppgaven.',
    poeng: 'Poeng skal registreres umiddelbart etter at laget er ferdig. Det som skal registeres av poeng på denne posten er totalt tid brukt på posten, pluss eventuell straffetid. Om du synes laget samarbeider spesielt godt, ved at de har god tone, mye engasjement, eller bare at' +
    'alle blir inkludert, så kan du velge å huke av for ekstrapoeng. Når du gir poeng velger du hvilket lag du skal registrere for, fyller inn hvor lang tid laget brukte, og eventuelt huker av ' +
    'for godt teamarbeid.',
    poenglabel: 'Tid',
    poengPlaceholder: 'Sekunder',
    poengtype: POENGTYPE_TID,
    hvor: '',
  },
];

export const finnPost = (nummerPaPost) => postene.find(post => post.nummer === nummerPaPost);
