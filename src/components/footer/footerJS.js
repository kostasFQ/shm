import React, {Component} from 'react';
import { connect } from 'react-redux';

import Form from '../forms/FormJS';
import './footerCSS.css';
import {showFormA} from "../../actions/uiActions";

class Footer extends Component{

    showForm = (event) =>{
        this.props.onShowForm(event.target.name, this.props.localStore.inputsFormShow);
    };

    render(){
        return(
            <div className="footer">
                <button className={this.props.localStore.inputsFormShow ? 'btn red': 'btn green'} onClick={this.showForm} name='inputsFormShow'>
                    <span className='buttonText'>{this.props.localStore.inputsFormShow? 'Закрыть': 'Добавить магазин'}</span>
                </button>
                {
                    this.props.localStore.inputsFormShow ? <Form/> : null
                
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
)(Footer)