import './shopsList.css';

import React, {Component} from 'react';


class Item extends Component {

    render() {
        return(
            <div className="listItem">
                <div>{this.props.name}</div>
                <div>{this.props.adress}</div>
                <div>{this.props.time}</div>
            </div>
        )
    }
}

export default class ChoiseView extends Component {

    render() {
        return (
            <div className="listField">
                <Item name = 'second' adress = 'street 1' time = '10:00 - 18:00'/>
            </div>
        )
    }
}