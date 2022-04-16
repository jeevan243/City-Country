import axios from "axios";
import { ADD_CITY, ADD_COUNTRY, GET_DATA_ERROR, GET_DATA_LOADING } from "./actionType";


export const addCity = (payload) = ({ type: ADD_CITY, payload: payload });
// export const addCountry = (payload) = ({ type: ADD_COUNTRY, payload: payload })
export const getDataLoading = () => ({ type: GET_DATA_LOADING });
export const getDataError = () => ({ type: GET_DATA_ERROR });


// export const getpopulationData = () => async (dispatch) => {
//     try {
//         dispatch(getDataLoading());
//         const { data } = await axios.get("https://city-country.herokuapp.com/cities");
//         dispatch(data)
//     } catch (error) {
//         console.log(error)
//     }

// }