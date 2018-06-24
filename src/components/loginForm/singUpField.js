import React, {Component} from 'react';
import { site } from '../../../utils';
import axios from 'axios';

import './loginForm.css';

export default class SingUpField extends Component{

    constructor(props){
        super(props);
        this.state = {
            login:'',
            email:'',
            password: ''
        };
    }

    valueToState = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
        //axios.post(`${site}/user`, this.state)
    };

    sendData = (event) => {
        event.preventDefault();
        axios.post(`${site}/sign`, this.state);
        event.target.reset();

    };

    render(){
        return (
            <article>
                <form onSubmit={this.sendData} onChange={this.valueToState}>
                    <h1 className='hTitle'>Регистрация</h1>

                    <div className='loginInputField'>
                        <span className='inputLabel'>Логин: </span>
                        <input type="text"  name='login' required />
                    </div>

                    <div className='loginInputField'>
                        <span className='inputLabel'>Email: </span>
                        <input type="email" name='email'/>
                    </div>

                    <div className='loginInputField'>
                        <span className='inputLabel'>Пароль: </span>
                        <input type="password" name='password'/>
                    </div>
                    <div className='loginInputField'>
                        <input className='btn' type='submit' style={{'color':'black'}} value='Pегистрация' />
                    </div>
                </form>
                <hr style={{'width': '99.3%'}}/>
            </article>
        );
    }
}