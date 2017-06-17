import './districteCSS.css';
import React, {Component} from 'react';


export default class Districts extends Component{

    constructor(props) {
        super(props);
        this.state = {
            condition: false
        };
        this.handleToggle = this.handleToggle.bind(this);
    }
    

    handleToggle() {
        this.setState( {condition: !this.state.condition} )

    };

    render() {

        return (
            <div
                onClick={this.handleToggle}
                className={this.state.condition ? 'opened' : 'closed'}
            >
                Открыть список районов


            </div>
        )
    }
}