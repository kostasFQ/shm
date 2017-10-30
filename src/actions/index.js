const ADD_SHOP = 'ADD_SHOP';
const ADD_ADDRESS = 'ADD_ADDRESS';


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
