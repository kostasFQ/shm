import './contentCSS.css';
import axios from 'axios';

import YandexMap from '../map/mapJS';
import Item from '../itemOfList/itemOfList';


import React, {Component} from 'react';
import Districts from "../districts/districtsJS";

export default class Content extends Component {

    constructor(props) {
        super(props);
        this.state = {shops:[]}
    }

    componentDidMount() {
        axios.get('http://localhost:8080/shops')
            .then((response) => {
                this.setState({shops:response.data});
            })
            .catch(function (error) {
                console.log(error);
            });
    };


    render() {
        return(
            <div className = 'contentStyle'>
                <div className="filter">
                    <Districts/>
                </div>
                <div className="leftBar">
                    <div className="cut">
                        {
                            this.state.shops
                                .sort( (a, b) => {
                                    if(a.shopName === b.shopName) return 0;
                                    return a.shopName < b.shopName ? -1 : 1;
                                })
                                .map( (shop)=>
                                <Item
                                    key={shop._id}
                                    shopName={shop.shopName}
                                    street={shop.street}
                                    building={shop.building}
                                    workTimeStart={shop.workTimeStart}
                                    workTimeEnd={shop.workTimeEnd}
                                    dayOff={shop.dayOff}
                                />,
                            )
                        }
                    </div>
                </div>
                <YandexMap
                    shops={this.state.shops}
                />
            </div>
        )
    }
}



