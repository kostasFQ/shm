import './districtsCSS.css';

import React, {Component} from 'react';


export default class Districts extends Component{

    constructor(props) {
        super(props);
        this.state = {value:'1'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    handleChange(event) {
        this.setState({value: event.target.value});
        event.preventDefault();
    };

    handleSubmit(event) {
        console.log(this.state.value);
        event.preventDefault();
    };

    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <input type="submit" value="submit"/>
            </form>
        )
    }
}