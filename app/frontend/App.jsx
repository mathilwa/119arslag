import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import AppLayout from './AppLayout.jsx';
import Hovedside from './Hovedside.jsx';
import Pamelding from './Pamelding.jsx';
import Overnatting from './Overnatting.jsx';
import Pameldte from './Pameldte.jsx';
import Jubilantene from './jubilantene/JubilanteneHovedside.jsx';
import 'babel-polyfill';
import { polyfill } from 'es6-promise';
polyfill();

const App = () => {
  return (
    <Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>
      <Route path="/" component={AppLayout}>
        <IndexRoute component={Hovedside}/>
        <Route path="/pamelding" component={Pamelding}/>
        <Route path="/overnatting" component={Overnatting}/>
        <Route path="/pameldte" component={Pameldte}/>
        <Route path="/jubilantene" component={Jubilantene}/>
      </Route>
    </Router>
  );
};

export default App;
