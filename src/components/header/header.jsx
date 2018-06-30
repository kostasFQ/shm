import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../loginForm/button';
// import LoginField from '../loginForm/loginFormField';
import NavigationPanell from '../navigation/navigation';

import './header.css';

class Header extends Component {
  render() {
    return (
      <div className="headerStyle">
        <NavigationPanell />
        <div>
          Welcome {'<User>'}
          <div className="hTitle">
            <Button />
          </div>
        </div>
        {/* {
           this.props.localStore.loginFormShow ? <LoginField /> : null
        } */}
      </div>
    );
  }
}
export default connect((globalStore) => {
  return {
    localStore: globalStore.uiStore,
  };
})(Header);
