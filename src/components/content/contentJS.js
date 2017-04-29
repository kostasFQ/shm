import './contentCSS.css';

import LeftBar from './leftBar/leftBarJS';
import YandexMap from './map/mapJS';

import React, {Component} from 'react';

export default class Content extends Component {
    render() {
        return(
            <div className = 'contentStyle'>
                <LeftBar/>
                <YandexMap/>
            </div>
        )
    }
}