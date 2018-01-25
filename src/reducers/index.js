import { combineReducers } from 'redux';

import shopListStore from './form';
import uiStore from './ui';

export default combineReducers({
    shopListStore,
    uiStore
})

