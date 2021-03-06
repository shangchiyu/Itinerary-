import axios from "axios";
import { GET_CITIES } from "./type";
const getData = cities => {
  console.log("cities", cities);
  return {
    type: GET_CITIES,
    payload: cities
  };
};

export const getCities = () => {
  console.log("here");
  return dispatch => {
    console.log("dispatch", dispatch);
    return axios
      .get("http://localhost:5000/api/cities/all")
      .then(response => {
        console.log("response", response);
        dispatch(getData(response.data));
      })
      .catch(error => {
        console.log("error", error);
        //TODO: handle the error when implemented
      });
  };
};
