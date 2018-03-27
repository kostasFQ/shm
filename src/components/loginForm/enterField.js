import React, {Component} from 'react';

export default class EnterField extends Component{

    render(){
        return (
            <div>
                <div className='hTitle'>Вход</div>

                <div className='loginInputField'>
                    <span className='inputLabel'>Логин: </span><input type="text"/>
                </div>

                <div className='loginInputField'>
                    <span className='inputLabel'>Пароль: </span> <input type="text"/>
                </div>
                <div className='loginInputField'>
                    <button className='btn'> <span style={{'color':'black'}}>Вход</span> </button>
                </div>

                <hr style={{'width': '99.3%'}}/>
            </div>
        )
    }
}