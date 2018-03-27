import './contentCSS.css';
import axios from 'axios';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getAllShops } from "../../actions/shopsStoreActions";

import MainFilter from "../mainFilter/mainFilterJS";
import  { site }  from '../../../utils';

class Content extends Component {

    constructor(props) {
        super(props);
        this.state = {shops:[]}
    }
    getShops = (shops)=> {
        this.props.onGetShops(shops);
    };

    componentDidMount(){
        axios.get(`${site}/shops`)
            .then((response) => {
                this.getShops(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    render() {

        return(
            <div>
                <MainFilter />
            </div>
        )
    }
}

export default connect (
    globalStore => ({
        localStore : globalStore.shopsStore
    }),
    dispatch => ({
        onGetShops : (shops) => {
            dispatch(getAllShops(shops))
        }
    })
)(Content)



