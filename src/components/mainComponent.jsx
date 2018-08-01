import React, { Component } from 'react';

import Header from './header/header';
import Content from './content/content';
import Footer from './footer/footer';

export default class MainComponent extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}
