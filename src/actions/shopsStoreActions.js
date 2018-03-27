export const GET_SHOPS = 'GET_SHOPS';


export function getAllShops(shops) {
    return {
        type: GET_SHOPS,
        payload : shops
    }

}