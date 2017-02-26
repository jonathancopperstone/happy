import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store/configure';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

import Placeholder from './_placeholder';

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={Placeholder}>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app-root')
);
