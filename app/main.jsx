'use strict';
import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
// import Home from './components/Home';
import Routes from './Routes';

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('main')
);
