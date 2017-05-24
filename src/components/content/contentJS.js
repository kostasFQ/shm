import './contentCSS.css';

import ShopsList from '../shopsList/shopsList'
import Districts from '../districts/districtsJS'
import YandexMap from '../map/mapJS';

import React, {Component} from 'react';

export default class Content extends Component {

    render() {
        return(
            <div className = 'contentStyle'>
                <div className="leftBar">
                    <Districts/>
                    <ShopsList/>
                </div>
                <YandexMap/>
            </div>
        )
    }
}