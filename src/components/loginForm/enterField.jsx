import axios from 'axios';

import React, { Component } from 'react';
import { site } from '../../../utils';

export default class EnterField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enterLogin: '',
      enterPassword: '',
    };
  }

    valueToState = (event) => {
      this.setState({
        [event.target.name]: event.target.value,
      });
      // axios.post(`${site}/user`, this.state)
    };

    sendData = (event) => {
      event.preventDefault();
      console.log('enter send-->>>', this.state);
      axios.post(`${site}/enter`, this.state);
      event.target.reset();
      this.setState({
        enterLogin: '',
        enterPassword: '',
      });
    };

    render() {
      return (
        <section>
          <form onSubmit={this.sendData} onChange={this.valueToState}>
            <div className="hTitle">Вход</div>

            <div className="loginInputField">
              <label className="inputLabel" htmlFor="enterLogin">Логин: </label>
              <input type="text" name="enterLogin" id="enterLogin" />
            </div>

            <div className="loginInputField">
              <label className="inputLabel" htmlFor="enterPass">Пароль: </label>
              <input type="text" name="enterPassword" id="enterPass" />
            </div>
            <div className="loginInputField">
              <button className="btn"> <span style={{ color: 'black' }}>Вход</span> </button>
            </div>
          </form>
          {/* <form action="/enter" method="post">
            <div>
              <label>Username:</label>
              <input type="text" name="username" />
            </div>
            <div>
              <label>Password:</label>
              <input type="password" name="password" />
            </div>
            <div>
              <input type="submit" value="Log In" />
            </div>
          </form> */}

          <hr style={{ width: '99.3%' }} />
        </section>
      );
    }
}
