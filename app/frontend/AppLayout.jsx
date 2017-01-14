import React from 'react';
import Meny from './Meny.jsx';
import Banner from './Banner.jsx';

const AppLayout = React.createClass({
  propTypes: {
    children: React.PropTypes.object.isRequired,
  },
  render () {
    return (
      <div>
        <Meny/>
        <div className="l-content">
          <main>
            <Banner/>
            {this.props.children}
          </main>
        </div>
      </div>
    );
  },
});

export default AppLayout;
