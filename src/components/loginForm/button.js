import React, {Component} from 'react';
import { connect } from 'react-redux';
import { showFormA } from '../../actions/uiActions';

import './loginForm.css';

class Button extends Component {

    showForm = (event) =>{
        this.props.onShowForm(event.target.name, this.props.localStore.loginFormShow);
    };

    render(){
        return(
            <div className='loginButtonField'>
                <button onClick={this.showForm} name='loginFormShow' className='loginFool'>{this.props.name}</button>
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