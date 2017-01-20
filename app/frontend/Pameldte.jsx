import React from 'react';
import 'whatwg-fetch';
import { forIn } from 'lodash';

const Pameldte = React.createClass({
  getInitialState () {
    return {
      pameldte: [],
    };
  },
  componentDidMount () {
    fetch('https://torunnogtrond.firebaseio.com/pameldte.json').then(response => {
      if (response.ok) {
        response.json().then(pameldte => {
          const allePameldte = [];
          forIn(pameldte, pameldt => {
            allePameldte.push(pameldt.navn);
            if (pameldt.folge) {
              pameldt.folge.forEach(folge => allePameldte.push(folge));
            }
          });
          this.setState({
            pameldte: allePameldte,
          });
        });
      }
    }).catch(() => {
      console.log('Kunne ikke hente påmeldte');
    });
  },
  render () {
    return (
        <div className="information pameldte-container pure-g">
          <div className="pure-u-1">
            <div className="l-box">
              <h3 className="information-head">
                Alle påmeldte
              </h3>
              <div>
                {this.state.pameldte.map((pameldt, key) => <li key={key}>{pameldt}</li>)}
              </div>
            </div>
          </div>
        </div>
    );
  },
});

export default Pameldte;
