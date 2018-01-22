import React, {Component} from 'react';
import Form from '../forms/FormJS';
import './footerCSS.css';

export default class Footer extends Component{
    constructor(props){
        super(props);
        this.state = {
            openForm: true //todo false!!!
        };
    }

    showForm = () =>{
        const cState = this.state.openForm;
        this.setState({openForm: !cState});
    };

    render(){
        return(
            <div className="footer">
                <div className={this.state.openForm ? 'btn red': 'btn green'} onClick={this.showForm}>
                    <span className='buttonText'>{this.state.openForm? 'Закрыть': 'Добавить магазин'}</span>
                </div>
                {
                    this.state.openForm ? <Form/> : null
                
                }
            </div>
        )
    }
}