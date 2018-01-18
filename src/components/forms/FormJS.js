import React, {Component} from 'react';
import ShopNameInput from "./ShopNameInput";
import ShopAddressInput  from './ShopAddressInput';
import WorkTimeInput from './workTimeInput';
import AdditionalOptions from './AdditionalOptions'
import Total from "./TotalFrom";

import { createStore } from 'redux';
import { Provider } from 'react-redux';



const initialStore = {
    shop:null,
    address:{},
    Mo_Fr : {
        status : 'work',
        startTime : '10:00',
        endTime : '16:00'
    },
    saturday: {
        status : 'work',
        startTime : '10:00',
        endTime : '16:00'
    },
    sunday: {
        status : 'work',
        startTime : '10:00',
        endTime : '17:00'
    }
};

function shopListStore(state = initialStore, action) {
    if(action.type === 'ADD_SHOP') {
        return {...state,
            shop:action.payload}
    }
    if(action.type === 'ADD_ADDRESS') {
        return {...state,
            address: {
                district:action.payload.district,
                street:action.payload.street,
                building:action.payload.building,
                latitude:action.payload.latitude,
                longitude:action.payload.longitude
            }
        }
    }
    if(action.type === 'SELECT_DAY_TYPE') {
        return {
            ...state,
            [action.payload.day]: {
                status : action.payload.status,
                startTime : action.payload.startTime,
                endTime : action.payload.endTime
            }
        };
    }
    if(action.type === 'ADD_OPTIONS') {
        return {
            ...state,
            additionalOptions: action.payload
        }
    }
    if(action.type === 'CLEAR') {
        return {};
    }

    return state;
}
const store = createStore(shopListStore);


export default class Form extends Component {

    render() {
        store.dispatch({type : 'CLEAR'});
        return (
            <Provider store={store}>
                <div className="form">
                    <ShopNameInput/>
                    <ShopAddressInput/>
                    <WorkTimeInput/>
                    <AdditionalOptions/>
                    <Total/>
                </div>
            </Provider>
        )
    }
}
