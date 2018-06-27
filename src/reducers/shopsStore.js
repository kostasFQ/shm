
import { GET_SHOPS } from '../actions/shopsStoreActions';

const initialStore = [];

export default function shopsStore(state = initialStore, action) {
  if (action.type === GET_SHOPS) {
    return {
      shops: action.payload,
    };
  }

  return state;
}
