import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import AppLayout from './AppLayout.jsx'
import Hovedside from './Hovedside.jsx';

const App = () => {
  return (
    <Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>
      <Route path="/" component={AppLayout}>
        <IndexRoute component={Hovedside}/>
        <Route path="/pamelding" component={Hovedside}/>
        <Route path="/informasjon" component={Hovedside}/>
        <Route path="/kontakt" component={Hovedside}/>
      </Route>
    </Router>
  );
};

export default App;