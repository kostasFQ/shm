export const SET_COORDS = 'SET_COORDS';
export const SHOW_FORM = 'SHOW_FORM';

export function setMapCoords(latitude, longitude) {
    return {
        type: SET_COORDS,
        payload : {
            latitude : latitude,
            longitude : longitude
        }
    };
}

export function showFormA(name, bool) {
    return {
        type: SHOW_FORM,
        payload : {
            name: name,
            bool: bool
        }
    };
}