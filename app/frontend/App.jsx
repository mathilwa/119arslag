import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import AppLayout from './AppLayout.jsx';
import Hovedside from './Hovedside.jsx';
import Pamelding from './Pamelding.jsx';
import Overnatting from './Overnatting.jsx';

const App = () => {
  return (
    <Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>
      <Route path="/" component={AppLayout}>
        <IndexRoute component={Hovedside}/>
        <Route path="/pamelding" component={Pamelding}/>
        <Route path="/overnatting" component={Overnatting}/>
      </Route>
    </Router>
  );
};

export default App;
