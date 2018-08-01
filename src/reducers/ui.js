

import { SET_COORDS, SHOW_FORM } from '../actions/uiActions';

const uiInitialStore = {
  map: {
    latitude: 52.105783,
    longitude: 23.685234,
    zoom: 10,
  },
  inputsFormShow: false,
  loginFormShow: false,
};

export default function uiStore(state = uiInitialStore, action) {
  if (action.type === SET_COORDS) {
    return {
      ...state,
      map: {
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
        zoom: 16,
      },
    };
  }

  if (action.type === SHOW_FORM) {
    return {
      ...state,
      [action.payload.name]: !action.payload.bool,
    };
  }

  return state;
}
