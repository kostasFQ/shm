const ADD_SHOP = 'ADD_SHOP';
const ADD_ADDRESS = 'ADD_ADDRESS';
const SELECT_DAY_TYPE = 'SELECT_DAY_TYPE';


export function setShopName(val) {
    return {
        type: ADD_SHOP,
        payload: val
    }
}

export function setShopAddressValue(val) {
    return {
        type: ADD_ADDRESS,
        payload:val
    }
}

export function selectDayType (day) {
    return {
        type: SELECT_DAY_TYPE,
        payload: day
    }
}
