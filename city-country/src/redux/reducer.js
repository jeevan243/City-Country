
import { ADD_CITY, ADD_COUNTRY } from "./actionType";

export const reducer = (store, { type, payload }) => {

    switch (type) {
        case ADD_CITY:
            return {
                ...store, city: payload
            }
        case ADD_COUNTRY:
            return {
                ...store, country: payload
            }
        default:
            return store;
    }
}