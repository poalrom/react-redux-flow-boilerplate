// @flow

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './index.styl';
import store from './store';
import Router from './router';

const rootElement = document.getElementById('root');
if (rootElement) {
  render(
    <Provider store={store}>
      <Router />
    </Provider>,
    rootElement,
  );
}
