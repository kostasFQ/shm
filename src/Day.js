import '../css/dayStyle.css';
import React, {Component} from 'react';


export default class Day extends Component {

    render() {
        return (
            <div className="d">My name is : {this.props.name}</div>
        );
    }
}