import { combineReducers } from 'redux';

import shopListStore from './form';
import uiStore from './ui';
import shopsStore from './shopsStore';

export default combineReducers({
    shopListStore,
    uiStore,
    shopsStore
})

