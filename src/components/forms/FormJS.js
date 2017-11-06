import React, {Component} from 'react';
import ShopNameInput from "./ShopNameInput";
import ShopAddressInput  from './ShopAddressInput';
import WorkTimeInput from './workTimeInput';
import Total from "./TotalFrom";

import { createStore } from 'redux';
import { Provider } from 'react-redux';



const initialStore = {
    shop:null,
    address:{
        district:null,
        street:null,
        building:null,
    },
    Mo_Fr : {},
    saturday: {},
    sunday: {}
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
                building:action.payload.building
            }
        }
    }
    if(action.type == 'SELECT_DAY_TYPE') {
        return {
            ...state,
            [action.payload.day]: {
                status : action.payload.status,
                startTime : action.payload.startTime,
                endTime : action.payload.endTime
            }
        };
    }
    if(action.type === 'CLEAR') {
        return {};
    }

    return state;
}
const store = createStore(shopListStore);


export default class Form extends Component {

    render() {
        /*store.dispatch({type : 'CLEAR'}); todo uncomm*/
        console.log(store.getState());
        return (
            <Provider store={store}>
                <div className="form">
                    <ShopNameInput/>
                    <ShopAddressInput/>
                    <WorkTimeInput/>
                    <button>ok</button>
                    {/*<Total/>*/}  {/*todo make in new window*/}
                </div>
            </Provider>
        )
    }
}
