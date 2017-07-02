import './headerCSS.css';

import React, {Component} from 'react';

export default class Header extends Component {



    render() {
        return (
            <div className="headerStyle">
                <img src="./img/map.png"/>
                <div>Second hands map</div>
            </div>
        )
    }
}