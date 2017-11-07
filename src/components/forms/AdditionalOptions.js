import React, {Component} from 'react';
import {connect} from 'react-redux';

import './CSS/formsCSS.css';
import {addOptions} from "../../actions/index";

class AdditionalOptions extends Component{

    addOptions = () => {
        let optionsString = this.areaInput.value;
        let options = optionsString.split(/\n|[,.]/);
        console.log(options);
        this.props.onAddOptions(options);
    };

    render(){
        let options = 'акции, скидки, дни обновления товара и т.д.';
        return (
            <div className='label'>
                <fieldset>
                    <legend>Дополнительные условия</legend>
                    <textarea
                        placeholder={options}
                        ref={(area) => {this.areaInput = area}}
                        defaultValue=''
                        onBlur={this.addOptions}
                    ></textarea>
                </fieldset>
            </div>
        )
    }
}

export default connect(
    state  => ({
        localStore:state
    }),
    dispatch => ({
        onAddOptions: (options) =>
            dispatch(addOptions(options))
    })
)(AdditionalOptions)