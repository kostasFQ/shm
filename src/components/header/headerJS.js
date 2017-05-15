import './headerCSS.css';

import React, {Component} from 'react';

export default class Header extends Component {



    render() {
        return (
            <div className="headerStyle">
                <img src="./src/components/header/img/map.png"/>
                <div className="headerSpan">{this.props.title}</div>
            </div>
        )
    }
}