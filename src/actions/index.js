const ADD_SHOP = 'ADD_SHOP';
const ADD_ADDRESS = 'ADD_ADDRESS';
const SELECT_DAY_TYPE = 'SELECT_DAY_TYPE';
const ADD_OPTIONS = 'ADD_OPTIONS';


export function setShopName(val) {
    return {
        type: ADD_SHOP,
        payload: val
    }
}

export function setShopAddressValue(building, street, district, latitude, longitude) {
    return {
        type: ADD_ADDRESS,
        payload: {
            building: building,
            street: street.toLowerCase(),
            district:district.toLowerCase(),
            latitude:latitude,
            longitude:longitude
        }
    }
}

export function selectDayType (day, status, startTime, endTime) {
    return {
        type: SELECT_DAY_TYPE,
        payload: {
            day: day,
            status: status,
            startTime : startTime,
            endTime : endTime
        }
    }
}
export function addOptions(options) {
    return {
        type: ADD_OPTIONS,
        payload : options
    }
}
