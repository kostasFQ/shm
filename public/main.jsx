import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Route } from 'react-router'

import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { createBrowserHistory } from 'history';

import Header from '../src/components/header/header';
import MainComponent from '../src/components/mainComponent';

import shopListStore from '../src/reducers/form';
import uiStore from '../src/reducers/ui';
import shopsStore from '../src/reducers/shopsStore';

const store = createStore(
  combineReducers({
    shopListStore,
    uiStore,
    shopsStore,
    routing: routerReducer
  })
)
const history = syncHistoryWithStore(createBrowserHistory(), store);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter /*history={history}*/>
    <div>
      <Route component={MainComponent}/>
      
    </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('APP'),
);
