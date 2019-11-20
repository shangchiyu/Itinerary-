import axios from "axios";
import { GET_ITINERARY } from "./type";
// import { params } from "../../Itinerary";
const getData = itinerary => {
  //   console.log();
  return {
    type: GET_ITINERARY,
    payload: itinerary
  };
};

export const getItineraries = params => {
  // console.log("here");
  return dispatch => {
    console.log("dispatch", dispatch);
    return axios
      .get(`http://localhost:5000/api/cities/${params.city}`)
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
