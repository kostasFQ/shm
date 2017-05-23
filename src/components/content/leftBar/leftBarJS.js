import './leftBarCSS.css';

import React, {Component} from 'react';

import Districts from '../districs/districsJS';
import ShopsList from '../shopsList/shopsList';

export default class LeftBar extends Component {
    render() {
        return(
            <div className="leftBar">
                <Districts/>
                <ShopsList/>
            </div>
        )
    }

}