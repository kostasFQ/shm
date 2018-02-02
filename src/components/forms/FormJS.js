import React, {Component} from 'react';
import ShopNameInput from "./ShopNameInput";
import ShopAddressInput  from './ShopAddressInput';
import WorkTimeInput from './workTimeInput';
import AdditionalOptions from './AdditionalOptions'
import Total from "./TotalFrom";

import reducer from '../../reducers/index';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

export default class Form extends Component {

    render() {
        return (
                <div className="form">
                    <ShopNameInput/>
                    <ShopAddressInput/>
                    <WorkTimeInput/>
                    <AdditionalOptions/>
                    <Total/>
                </div>
            //</Provider>
        )
    }
}
