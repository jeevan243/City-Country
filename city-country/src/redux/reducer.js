
import { ADD_CITY, GET_DATA_ERROR, GET_DATA_LOADING } from "./actionType";



export const reducer = (store, { type, payload }) => {

    switch (type) {
        case ADD_CITY:
            return {
                ...store, city: payload, loading: false, error: false
            }
        case GET_DATA_LOADING:
            return {
                ...store, loading: true
            }
        case GET_DATA_ERROR:
            return {
                ...store, error: true
            }
        default:
            return store;
    }
}