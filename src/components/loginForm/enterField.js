import React, {Component} from 'react';
import { site } from '../../../utils';
import axios from 'axios';

export default class EnterField extends Component{

    constructor(props){
        super(props);
        this.state = {
            enterLogin:'',
            enterPassword: ''
        }
    }

    valueToState = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
        //axios.post(`${site}/user`, this.state)
    };

    sendData = (event) => {
        event.preventDefault();
        console.log('enter send-->>>', this.state);
        axios.post(`${site}/user`, this.state);
        event.target.reset();

    };

    render(){
        return (
            <section>
                <form onSubmit={this.sendData} onChange={this.valueToState}>
                    <div className='hTitle'>Вход</div>

                    <div className='loginInputField'>
                        <span className='inputLabel'>Логин: </span>
                        <input type="text" name='enterLogin'/>
                    </div>

                    <div className='loginInputField'>
                        <span className='inputLabel'>Пароль: </span>
                        <input type="text" name='enterPassword'/>
                    </div>
                    <div className='loginInputField'>
                        <button className='btn'> <span style={{'color':'black'}}>Вход</span> </button>
                    </div>
                </form>

                <hr style={{'width': '99.3%'}}/>
            </section>
        )
    }
}