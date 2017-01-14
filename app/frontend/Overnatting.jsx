import React from 'react';

const Overnatting = () => {
  return (
      <div className="information pure-g overnatting-container">
        <div className="pure-u-1">
          <div className="l-box">
            <h3 className="information-head">Overnatting</h3>
            <div className="overnatting-info">
              <p>
                For de av dere som kommer langveisfra så vil det kanskje være behov for overnatting. Lokalet for festen, Gamlehorten Gjestegård, har også mulighet for overnatting.
                Dette bør bestilles så fort som mulig, da rommene der går fort.
              </p>
            </div>
            <div className="overnatting-info gamlehorten-overnatting-info">
              Gamlehorten Gjestegård kan tilby følgende romtyper:

              <ul>
              <li>Dobbeltrom med eget bad 895,- til 1095</li>
                <li>Dobbeltrom med felles bad 695,- til 895,-</li>
                <li>Leilighet med fellesrom og kjøkken</li>
                <ul>
                  <li>Dobbeltseng 1250,-</li>
                  <ul>
                    <li>Mulighet for ekstraseng, et tillegg på 400,-</li>
                  </ul>
                    <li> Tre rom med 5 senger fra 1550,- (for 3 – 7 personer)</li>
                  <ul>
                    <li>Minimum 3 personer, et tillegg på 400,- per person.</li>
                    <li>Det kan settes 2 ekstrasenger i fellesrom.</li>
                  </ul>
                </ul>
                <li>Familierom med 4-6 senger (barna har eget rom)</li>
                <ul>
                  <li>Rom med fire sengeplasser – 1600,-</li>
                  <li>Rom med fem sengeplasser – 2000,-</li>
                  <li>Rom med seks sengeplasser – 2400,-</li>
                </ul>
              </ul>

              Send epost til <a href="mailto:post@gamlehorten.no." target="_top">post@gamlehorten.no</a> for å bestille rom eller om dere skulle ha noen spørsmål rundt dette.
            </div>
            <p>
              Andre alternativer til overnatting om det ikke lenger skulle være plass hos Gamlehorten Gjestegård er <a href="http://www.smshotell.no/">Sjømilitære Samfund</a>, <a href="http://www.eikenpensjonat.no/">Eiken pensjonat</a> og <a href="https://goo.gl/VK373A">Best Western Horten</a>.
            </p>
            <p>
              Ta gjerne kontakt med oss om dere har noen spørsmål!
            </p>
          </div>
        </div>
      </div>
  );
};

export default Overnatting;
