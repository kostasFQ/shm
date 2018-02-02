'use strict';

const uiInitialStore = {
    mapLatitude: 52.105783,
    mapLongitude: 23.685234,
    mapZoom : 10
};

export default function uiStore(state = uiInitialStore, action) {

    if( action.type === 'SET_COORDS' ) {
        return {
            mapLatitude: action.payload.latitude,
            mapLongitude: action.payload.longitude,
            mapZoom: 16
        }
    }
    return state;
}