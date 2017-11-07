import React, {Component} from 'react';
import './CSS/formsCSS.css';

export default class AdditionalOptions extends Component{
    render(){
        let options = 'акции, скидки, дни обновления товара и т.д.';
        return (
            <div className='label'>
                <fieldset>
                    <legend>Дополнительные условия</legend>
                    <textarea placeholder={options}></textarea>
                </fieldset>
            </div>
        )
    }
}