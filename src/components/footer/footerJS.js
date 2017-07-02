import React, {Component} from 'react';
import Form from './formJS';
import './footerCSS.css';

export default class Footer extends Component{
    constructor(props){
        super(props);
        this.state = {
            openForm: false
        };

        this.showForm = this.showForm.bind(this);
    }

    showForm(){
        const cState = this.state.openForm;
        this.setState({openForm: !cState});
    }

    render(){
        return(
            <div className="footer">
                <div className="btn" onClick={this.showForm}>
                    {this.state.openForm? 'Закрыть форму': 'Добавить магазин'}
                </div>
                {this.state.openForm ? <Form/> : null}
            </div>
        )
    }
}