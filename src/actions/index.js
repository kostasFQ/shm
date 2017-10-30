const ADD_FIELD = 'ADD_FIELD';


export function setFieldValue(val) {
    return {
        type: ADD_FIELD,
        payload: val
    }
}
