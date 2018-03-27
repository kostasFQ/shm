import React, {Component} from 'react';
import { connect } from 'react-redux';
import { showFormA } from '../../actions/uiActions';

import './loginForm.css';

class Button extends Component {

    showForm = () =>{
        this.props.onShowForm('loginFormShow', this.props.localStore.loginFormShow);
    };

    render(){
        return(
            <div className='loginButtonField'>
                {this.props.localStore.loginFormShow ?
                    <button onClick={this.showForm} className='loginFool red'>Закрыть</button> :
                    <button onClick={this.showForm} className='loginFool green'>Вход</button>
                }
            </div>
        )
    }
}

export default connect(
    globalStore => ({
        localStore : globalStore.uiStore
    }),
    dispatch => ({
        onShowForm : (name, bool)=> {
            dispatch(showFormA(name, bool))
        }
    })
)(Button)