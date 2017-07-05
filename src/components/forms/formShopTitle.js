import React, {Component} from 'react';

export default class FormShopTitle extends Component{
    constructor(props){
        super(props);
        this.state = {
            title:'',
            validTitle:''
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.validateTitle = this.validateTitle.bind(this);
    }

    onTitleChange(e){
        let val = e.target.value;
        console.log(val);
        this.setState({title: val});
    };

    validateTitle(){
        let lowerTitle = this.state.title.toLowerCase();
        let reg = /\w+\d+\w*/;
        console.log(lowerTitle.search( reg));

        if(lowerTitle === ''){
            this.setState({validTitle: false});
        }
        else if(lowerTitle.length < 3){
            this.setState({validTitle: false});
        }
        else if(lowerTitle.search(reg) !== -1){
            this.setState({validTitle: false});
        }




        else {
            this.setState({validTitle: true});
        }
    };

    render(){
        return (
            <div className="label">
                <label>Название магазина:</label>
                <input
                    type="text"
                    value={this.state.title}
                    onChange={this.onTitleChange}
                    onBlur={this.validateTitle}
                /> {this.state.validTitle === false ? <span>wrong!</span> : null}

            </div>
        )
    }
}