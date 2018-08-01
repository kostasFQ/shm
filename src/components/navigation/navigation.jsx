import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class NavigationPanell extends Component {
  render() {
    return (
      <div className="headerStyle">
        <div className="hTitle">
          <img src="./img/map.png" alt="pic" />
          <span>
            <Link to="/">Second hands map</Link>
          </span>
        </div>
        <div>
          <Link to="/login">Log in/Sing up</Link>
        </div>
      </div>
    );
  }
}
