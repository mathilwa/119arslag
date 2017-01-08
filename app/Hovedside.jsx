import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Banner from './Banner.jsx';
import Invitasjon from './Invitasjon.jsx';

const Hovedside = () => {
  return (
      <div className="container">
        <Banner />
        <Invitasjon />
      </div>
  );
};

export default Hovedside;