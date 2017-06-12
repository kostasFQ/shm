import React, {Component} from 'react';


export default class Districts extends Component{

    constructor(props) {
        super(props);
        this.state = {value:'1'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    handleChange(event) {
        alert(event);//example todo !!! make dropin window

    };

    handleSubmit(event) {
        console.log(this.state.value);
        event.preventDefault();
    };

    render() {

        return (
            <div onClick={this.handleChange}>Районы</div>
        )
    }
}