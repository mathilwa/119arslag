import React from 'react';
import VisibleIf from './VisibleIf.jsx';

const DuErPameldt = ({pameldt, antallFolge, meldPaFlere}) => {
  return (
    <div>
        <VisibleIf isVisible={pameldt && antallFolge === 0}>
          <div className="du-er-pameldt">Du er nå påmeldt! Vi gleder oss til å feire med deg!</div>
        </VisibleIf>
        <VisibleIf isVisible={pameldt && antallFolge > 0}>
          <div className="du-er-pameldt">Dere er nå påmeldt! Vi gleder oss til å feire med dere!</div>
        </VisibleIf>
        <VisibleIf isVisible={pameldt}>
          <button className="pure-button button-xlarge meld-pa" type="submit" onClick={meldPaFlere}>Meld på flere</button>
        </VisibleIf>
      </div>
  );
};

DuErPameldt.propTypes = {
  pameldt: React.PropTypes.bool.isRequired,
  antallFolge: React.PropTypes.number.isRequired,
  meldPaFlere: React.PropTypes.func.isRequired,
};

export default DuErPameldt;
