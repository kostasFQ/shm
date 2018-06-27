import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Header from './header/header';
import Content from './content/content';
import Footer from './footer/footer';
import reducer from '../reducers/index';

const store = createStore(reducer);


export default class MainComponent extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <div>
            <Header />
            <Content />
            <Footer />
          </div>
        </Provider>
      </div>
    );
  }
}

