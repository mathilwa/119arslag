import React from 'react';
import OvernattingInformasjonForHovedside from './OvernattingInformasjonForHovedside.jsx';

const Invitasjon = () => {
  return (
      <div className="information pure-g">
        <div className="pure-u-1">
          <div className="l-box">
            <h3 className="information-head">
              Hei alle kjære venner og familie av mamma og pappa/Torunn og Trond!
            </h3>
            <p>
              Lørdag 3. juni 2017 vil vi gjerne få invitere dere til å bli med å feire at mamma og pappa fyller 60 år. Alle er invitert med kjæreste/ektefelle/samboer, så spre gjerne ordet videre!
            </p>
            <p>
              Tanken er å begynne festligheten tidlig på dagen, med litt lek og moro for å kose oss og bli kjent med de man ikke kjenner så godt.
              Festlighetene vil fortsette utover kvelden med god mat og drikke. Lokalet vi skal være i er <a href="http://www.gamlehortengard.no/">Gamlehorten Gjestegård</a>,
              et koselig sted på <a href="https://goo.gl/maps/9HrfUVYQ1xC2">Karljohansvern i Horten</a>.
            </p>
            <OvernattingInformasjonForHovedside />
          </div>
        </div>
      </div>
  );
};

export default Invitasjon;
