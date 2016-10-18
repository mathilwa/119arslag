import React from 'react';
import {Link} from 'react-router';
import Navigation from './navigation.jsx';

import { getUserName } from './js/user.js';

const AppLayout = React.createClass({
  propTypes: {
    children: React.PropTypes.object.isRequired,
  },
  render: function() {
    return (
      <div>
        <Navigation />
        <div className="u-container">
          <div className="app-container">
            <div className="app-header">
              <header className="t-sectionHeader app-navn">
                <span>BEKK Utfordringen!</span>
              </header>
              <i className="fa fa-trophy app-ikon" aria-hidden="true"/>
              <span className="login-info">{`${getUserName()}`}</span>
            </div>
            <div id="humor"></div>
            <div id="humor2"></div>
            <main>
              {this.props.children}
            </main>
          </div>
        </div>
      </div>
    );
  },
});

export default AppLayout;