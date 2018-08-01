import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import Button from '../loginForm/button';
import LoginField from '../loginForm/loginFormField';
import Logo from './logo/logo';

import './header.css';


class Header extends Component {
  render() {
    return (
      <div>
        <Logo />
        <span>Main</span>
        <span>Log in</span>
        <span>Sing up</span>
      </div>
      /*<div className="headerStyle">
        <div className="headerStyle">
        <div className="hTitle">
          
          <span>
            <Link to="/">Second<img src="./img/map.png" alt="pic" />hands map</Link>
          </span>
        </div>
        <div>
          <Link to="/login">Log in/Sing up</Link>
        </div>
      </div>
        <div>
          Welcome {'<User>'}
          <div className="hTitle">
            <Button />
          </div>
        </div>
        {
           this.props.localStore.loginFormShow ? <LoginField /> : null
        }
      </div>*/
    );
  }
}
export default connect((globalStore) => {
  return {
    localStore: globalStore.uiStore,
  };
})(Header);
