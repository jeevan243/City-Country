import { createStore } from "redux";
import { reducer } from "./reducer";


export const store = createStore(reducer, {
    city: [],
    loading: false,
    error: false
});

console.log(store.loading)