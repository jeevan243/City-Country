import { ADD_CITY, ADD_COUNTRY } from "./actionType";


export const addCity = (payload) = ({ type: ADD_CITY, payload: payload });
export const addCountry = (payload) = ({ type: ADD_COUNTRY, payload: payload })