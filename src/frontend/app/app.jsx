import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './js/store.js';

import NesteUtfordring from './utfordring/nesteUtfordringCV.jsx';
import UtfordringCV from './utfordring/UtfordringCV.jsx';
import PoengtavleCV from './poengtavle/poengtavleCV.jsx';
import RedigerUtfordringCV from './redigerutfordring/redigerUtfordringCV.jsx';
import NyUtfordringCV from './nyutfordring/nyUtfordringCV.jsx';
import AppLayout from './appLayout.jsx';

import moment from 'moment';
import nb from 'moment/locale/nb';
moment().locale('nb');

import { isAuthenticated, authenticate } from './js/auth.js';

function startRender() {
  ReactDOM.render((
      <Hello/>
    ),
    document.getElementById('react-container')
  );
}

