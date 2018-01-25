'use strict';

const initialStore = {
    shop:{
        value: undefined,
        verificate: undefined
    },
    address:{
        city: {
            value: undefined,
            verificate: undefined
        },
        district: {
            value: undefined,
            verificate: undefined
        },
        street: {
            value: undefined,
            verificate: undefined
        },
        building: {
            value: undefined,
            verificate: undefined
        }
    },
    Mo_Fr : {
        status : 'work',
        startTime : '10:00',
        endTime : '17:00'
    },
    saturday: {
        status : 'work',
        startTime : '10:00',
        endTime : '17:00'
    },
    sunday: {
        status : 'work',
        startTime : '10:00',
        endTime : '17:00'
    }
};

export default function shopListStore(state = initialStore, action) {
    if(action.type === 'ADD_SHOP') {
        return {...state,
            shop:action.payload}
    }
    if(action.type === 'ADD_ADDRESS') {
        return {...state,
            address: {
                city: action.payload.city,
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
