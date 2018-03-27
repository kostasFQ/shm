import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import  { site }  from '../../../utils';
import { getAllShops } from "../../actions/shopsStoreActions";
import {showFormA} from "../../actions/uiActions";

import './CSS/formsCSS.css';

class Total extends Component {

    getShops = (shops)=> {
        this.props.onGetShops(shops);
        this.props.onShowForm(this.props.uiStore.inputsFormShow)
    };

    submit = () => {
        axios.post(`${site}/shops`, this.props.FormStore)
        .then(
            axios.get(`${site}/shops`)
                .then((response) => {
                    this.getShops(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                })
        );

    };


    render() {
        return (
            <div>
                {this.props.FormStore.shop.verificate &&
                 this.props.FormStore.address.city.verificate &&
                 this.props.FormStore.address.district.verificate &&
                 this.props.FormStore.address.street.verificate &&
                 this.props.FormStore.address.building.verificate ?
                    <button
                        className='submitButton'
                        onClick={this.submit}>
                        <span className='buttonText'>Добавить магазин</span>
                    </button> : <button
                        className='submitButton'
                        onClick={this.submit} disabled={true} style={{cursor : 'default', background: 'gray'}}>
                        <span className='buttonText'>Добавить магазин</span>
                    </button>
                }
            </div>
        )
    }
}

export default connect(
    globalStore => ({
        FormStore : globalStore.shopListStore,
        uiStore:globalStore.uiStore
}),
    dispatch => ({
        onGetShops : (shops) => {
            dispatch(getAllShops(shops))
        },
        onShowForm : (bool)=> {
            dispatch(showFormA(bool))
        }
    })

)(Total);
