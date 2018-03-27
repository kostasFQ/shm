import React, {Component} from 'react';
import { connect } from 'react-redux';

import Form from '../forms/FormJS';
import './footerCSS.css';
import {showFormA} from "../../actions/uiActions";

class Footer extends Component{

    showForm = () =>{
        this.props.onShowForm(this.props.localStore.inputsFormShow);
    };

    render(){
        return(
            <div className="footer">
                <div className={this.props.localStore.inputsFormShow ? 'btn red': 'btn green'} onClick={this.showForm}>
                    <span className='buttonText'>{this.props.localStore.inputsFormShow? 'Закрыть': 'Добавить магазин'}</span>
                </div>
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
        onShowForm : (bool)=> {
            dispatch(showFormA(bool))
        }
    })
)(Footer)