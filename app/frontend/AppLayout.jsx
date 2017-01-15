import React from 'react';
import { forIn, isEmpty } from 'lodash';
import Meny from './Meny.jsx';
import Banner from './Banner.jsx';

const AppLayout = React.createClass({
  propTypes: {
    children: React.PropTypes.object.isRequired,
  },
  getInitialState () {
    return {
      antallPameldte: 0,
      antallFolge: 0,
    };
  },
  componentDidMount () {
    fetch('https://torunnogtrond.firebaseio.com/pameldte.json').then(response => {
      if (response.ok) {
        response.json().then(pameldte => {
          forIn(pameldte, pameldt => {
            const antallFolge = isEmpty(pameldt.folge) ? 0 : pameldt.folge.length;
            this.setState({antallFolge: this.state.antallFolge + antallFolge });
          });
          const antallPameldte = Object.keys(pameldte).length + this.state.antallFolge;
          this.setState({
            antallPameldte: antallPameldte,
          });
        });
      }
    }).catch(() => {
      console.log('Kunne ikke hente påmeldte');
    });
  },
  render () {
    return (
      <div>
        <Meny antallPameldte={this.state.antallPameldte}/>
        <div className="l-content">
          <main>
            <Banner/>
            {this.props.children}
          </main>
        </div>
        <div className="footer l-box">
          <p>Laget av Mathilde i forbindelse med Torunn og Trond sitt 119-årslag</p>
        </div>
      </div>
    );
  },
});

export default AppLayout;
