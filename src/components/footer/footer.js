import React, {Component} from 'react';
import { connect } from 'react-redux';

import Form from '../forms/Form';
import './footer.css';
import {showFormA} from "../../actions/uiActions";

class Footer extends Component{

    showForm = (event) =>{
        this.props.onShowForm(event.target.name, this.props.localStore.inputsFormShow);
    };

    render(){
        return(
            <div className="footer">
                {
                    this.props.localStore.inputsFormShow ?
                        <div style={{'width': '100%', 'display': 'flex', 'justifyContent': 'center'}}>
                            <button className='btn red buttonText' onClick={this.showForm} name='inputsFormShow'>Закрыть</button>
                            <Form/>
                        </div>
                         :
                        <button className='btn green buttonText' onClick={this.showForm} name='inputsFormShow'>Добавить магазин</button>
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