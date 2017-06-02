import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import AppLayout from './AppLayout.jsx';
import Hovedside from './Hovedside.jsx';
import Pamelding from './Pamelding.jsx';
import Overnatting from './Overnatting.jsx';
import Pameldte from './Pameldte.jsx';
import Program from './Program.jsx';
import Jubilantene from './jubilantene/JubilanteneHovedside.jsx';
import Poengoversikt from './konkurranse/Poengoversikt.jsx';
import Lagoversikt from './konkurranse/Lagoversikt.jsx';
import Post from './konkurranse/post/Post.jsx';
import Poster from './konkurranse/VelgPost.jsx';
import 'babel-polyfill';
import { polyfill } from 'es6-promise';
polyfill();

const App = () => {
  return (
    <Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>
      <Route path="/" component={AppLayout}>
        <IndexRoute component={Hovedside}/>
        <Route path="/program" component={Program}/>
        <Route path="/pamelding" component={Pamelding}/>
        <Route path="/overnatting" component={Overnatting}/>
        <Route path="/pameldte" component={Pameldte}/>
        <Route path="/jubilantene" component={Jubilantene}/>
        <Route path="/oversikt" component={Poengoversikt}/>
        <Route path="/lag" component={Lagoversikt}/>
        <Route path="/poster" component={Poster}/>
        <Route path="/post/:id" component={Post}/>
      </Route>
    </Router>
  );
};

export default App;
