const initialState = {
  shopName: 'test shop'
};

export default function pageStore( state = initialState, action ) {

    switch (action.type) {
        case 'SET_SHOPNAME' :
            return {...state, shopName: action.payload};

        default :
            return state;
    }
}