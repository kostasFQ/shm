import './contentCSS.css';
import axios from 'axios';

import YandexMap from '../map/mapJS';
import Item from '../itemOfList/itemOfList';


import React, {Component} from 'react';

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
                <div className="leftBar">
                    {
                        this.state.shops.map( (shop)=>
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
                <YandexMap
                    lat={52.104398} lon={23.755016}
                />
            </div>
        )
    }

}



