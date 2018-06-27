const ADD_SHOP = 'ADD_SHOP';
const ADD_ADDRESS = 'ADD_ADDRESS';
const SELECT_DAY_TYPE = 'SELECT_DAY_TYPE';
const ADD_OPTIONS = 'ADD_OPTIONS';
const CLEAR = 'CLEAR';

export { ADD_SHOP, ADD_ADDRESS, ADD_OPTIONS, SELECT_DAY_TYPE, CLEAR };


export function setShopName(shopName) {
  return {
    type: ADD_SHOP,
    payload: {
      value: shopName.value[0].toUpperCase() + shopName.value.slice(1).toLowerCase(),
      verificate: shopName.verificate,
    },
  };
}

export function setShopAddressValue(address) {
  return {
    type: ADD_ADDRESS,
    payload: {
      building: address.building,
      street: address.street,
      district: address.district,
      city: address.city,
      latitude: address.latitude,
      longitude: address.longitude,
    },
  };
}

export function selectDayType(day, status, startTime, endTime) {
  return {
    type: SELECT_DAY_TYPE,
    payload: {
      day,
      status,
      startTime,
      endTime,
    },
  };
}
export function addOptions(options) {
  return {
    type: ADD_OPTIONS,
    payload: options,
  };
}
export function clear() {
  return {
    type: CLEAR,
  };
}

