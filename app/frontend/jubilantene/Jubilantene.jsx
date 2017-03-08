import React from 'react';
import Aarstall from './Aarstall.jsx';

const Jubilantene = React.createClass({
  render () {
    return (
      <div className="information pure-g">
        <div className="pure-u-1">
          <div className="l-box">
            <h3 className="information-head">Bli kjent med jubilantene</h3>
              <section id="cd-timeline">
                <div className="cd-timeline-block">
                  <Aarstall aarstall="1957"/>

                  <div className="cd-timeline-content">
                    <h2>Torunn kommer til verden</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic
                      quasi placeat iure tempora laudantium ipsa ad debitis unde?</p>
                    <img src="img/Torunn/Torunn_1år.jpg"/>
                  </div>
                </div>

                <div className="cd-timeline-block">
                  <Aarstall aarstall="1958"/>

                  <div className="cd-timeline-content">
                    <h2>Lille Trond blir født</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic
                      quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui
                      ut.</p>
                    <img src="img/Trond/nyfødt.jpg"/>
                  </div>
                </div>
                <div className="cd-timeline-block">
                  <Aarstall aarstall="1962"/>

                  <div className="cd-timeline-content">
                    <h2>Jente på gård</h2>
                    <p>Som liten jente vokste Torunn opp på en liten gård på Haugland utenfor Os, med mamma Dorotha og bror Tormod.</p>
                    <img src="img/Torunn/born0016.jpg"/>
                  </div>
                </div>
                <div className="cd-timeline-block">
                  <Aarstall aarstall="1962"/>

                  <div className="cd-timeline-content">
                    <h2>Gutt i søskenflokken</h2>
                    <p>Som enn så lenge eneste gutt i søskenflokken prøver lille Trond sitt beste for å passe inn.</p>
                    <img src="img/Trond/pappa i kjole.jpg"/>
                  </div>
                </div>
                <div className="cd-timeline-block">
                  <Aarstall aarstall="1972"/>

                  <div className="cd-timeline-content">
                    <h2>Torunn blir konfirmert i Os Kyrkje</h2>
                    <img src="img/Torunn/Torunn0005.jpg"/>
                  </div>
                </div>
                <div className="cd-timeline-block">
                  <Aarstall aarstall="1973"/>

                  <div className="cd-timeline-content">
                    <h2>Trond blir konfirmert</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <img src="img/Trond/Konfirmasjon.jpg"/>
                  </div>
                </div>
                <div className="cd-timeline-block">
                  <Aarstall aarstall="1976"/>

                  <div className="cd-timeline-content">
                    <h2>Første kvinne i militæret</h2>
                    <p>I 1976 flyttet Torunn til Lillehammer/Jørstadmoen for å begynne på Radioskolen for hærens samband, og ble med dette Norges første kvinne i militæret</p>
                    <img src="img/Torunn/Torunn_militæret.jpg"/>
                  </div>
                </div>

                <div className="cd-timeline-block">
                  <div className="cd-timeline-img">
                    <div className="aar">2017</div>
                  </div>
                </div>
              </section>
            </div>
          </div>
      </div>
    );
  },
});

export default Jubilantene;
