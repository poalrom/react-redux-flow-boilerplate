// @flow

import * as React from 'react';
import { HashRouter as BaseRouter, Route } from 'react-router-dom';
import Form from './containers/Form';

const Router = () => (
  <BaseRouter>
    <div>
      <Route exact path="/" component={Form} />
    </div>
  </BaseRouter>
);

export default Router;
