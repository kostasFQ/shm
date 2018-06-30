import React, { Component } from 'react';

export default class NavigationPanell extends Component {
  render() {
    return (
      <div className="headerStyle">
        <div className="hTitle">
          <img src="./img/map.png" alt="pic" />
          <div>
            <a href="/">Second hands map</a>
          </div>
        </div>
        <div>
          <a href="/login">LOGIN</a>
        </div>
      </div>
    );
  }
}
