import React from 'react';
import Meny from './Meny.jsx';

const AppLayout = React.createClass({
  propTypes: {
    children: React.PropTypes.object.isRequired,
  },
  render: function() {
    return (
      <div>
        <Meny/>
        <div>
          <main>
            {this.props.children}
          </main>
        </div>
      </div>
    );
  },
});

export default AppLayout;