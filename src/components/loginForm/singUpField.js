import React, {Component} from 'react';
import { site } from '../../../utils';
import axios from 'axios';

export default class SingUpField extends Component{

    constructor(props){
        super(props);
        this.state = {
            login:'',
            email:'',
            password: ''
        }
    }

    valueToState = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
        axios.post(`${site}/user`, this.state)
    };

    sendData = () => {
        console.log('sing state send-->>>', this.state);
        axios.post(`${site}/user`, this.state)
    };

    render(){
        return (
            <div>
                <div onChange={this.valueToState}>
                    <div className='hTitle'>Регистрация</div>

                    <div className='loginInputField'>
                        <span className='inputLabel'>Логин: </span>
                        <input type="text"  name='login'/>
                    </div>

                    <div className='loginInputField'>
                        <span className='inputLabel'>Email: </span>
                        <input type="text" name='email'/>
                    </div>

                    <div className='loginInputField'>
                        <span className='inputLabel'>Пароль: </span>
                        <input type="text" name='password'/>
                    </div>
                </div>


                <div className='loginInputField'>
                    <button className='btn' onClick={this.sendData}>
                        <span style={{'color':'black'}}>Регистрация</span>
                    </button>
                </div>

                <hr style={{'width': '99.3%'}}/>
            </div>
        )
    }
}