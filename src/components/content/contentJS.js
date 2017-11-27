import './contentCSS.css';
import axios from 'axios';

import React, {Component} from 'react';
import MainFilter from "../mainFilter/mainFilterJS";

export default class Content extends Component {

    constructor(props) {
        super(props);
        this.state = {shops:[]}
    }

    render() {
        axios.get('https://localhost:8080/shops')
            .then((response) => {
                this.setState({shops:response.data});
            })
            .catch(function (error) {
                console.log(error);
            });
        return(
            <div className='tmp'>
                <MainFilter shops={this.state.shops}/>
            </div>
        )
    }
}



