import React from 'react';
import { lagene } from './lagene.js';
import { JUBILANT_TORUNN, JUBILANT_TROND } from './../jubilantene/informasjon.js';

const skrivUtFargeForJubilant = (jubilant) => {
  const lagForJubilant = lagene.filter(lag => lag.tilhorer === jubilant);
  return lagForJubilant.map(lag => <span>{lag.navn}<br/></span>);
};

const Lagoversikt = () => {
  return (
    <div className="information pure-g information-container lagversikt">
      <div className="pure-u-1">
        <div className="l-box">
          <h3 className="information-head tittel">Lagoversikt</h3>
          <p className="oversikt-info">
            Geir<br/>
            Janne<br/>
            Anita<br/>
            Jon Birger<br/>
            Erik<br/>
            Vibecke<br/>
          </p>
          <p className="oversikt-info">
            Elle<br/>
            Poul<br/>
            Inger<br/>
            Trond N.<br/>
            Magne<br/>
            Kristian<br/>
          </p>
          <p className="oversikt-info">
            Elisabeth<br/>
            Unni<br/>
            Sebastien<br/>
            Nils<br/>
            Vidar<br/>
            Anders F.<br/>
          </p>
          <p className="oversikt-info">
            Heine<br/>
            Jorunn<br/>
            Thore<br/>
            Norunn<br/>
            Helene<br/>
            Einar<br/>
          </p>
          <p className="oversikt-info">
            Mona<br/>
            Håkon<br/>
            Anne<br/>
            Tore<br/>
            Thor Helge<br/>
            Solfrid<br/>
          </p>
          <p className="oversikt-info">
            Torunn<br/>
            Tormod<br/>
            Marit<br/>
            Astrid<br/>
            Berit<br/>
            Karin<br/>
          </p>
          <p className="oversikt-info">
            Katrine<br/>
            Anders<br/>
            Sofie<br/>
            Ester<br/>
            Juni<br/>
            Karoline<br/>
          </p>
          <p className="oversikt-info">
            Iben<br/>
            Maarten<br/>
            Pernille<br/>
            Hilde<br/>
            Trond<br/>
            Egil<br/>
          </p>
          <p className="oversikt-info">
            <span className="torunn">Team Torunn</span><br/>
            {skrivUtFargeForJubilant(JUBILANT_TORUNN)}
          </p>
          <p className="oversikt-info">
            <span className="trond">Team Trond</span><br/>
            {skrivUtFargeForJubilant(JUBILANT_TROND)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lagoversikt;
