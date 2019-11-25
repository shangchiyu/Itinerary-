import axios from "axios";
import { GET_ACTIVITY } from "./type";

const getData = activity => {
  //   console.log();
  return {
    type: GET_ACTIVITY,
    payload: activity
  };
};

export const getActivity = params => {
  return dispatch => {
    console.log("dispatch", dispatch);
    return axios
      .get(`http://localhost:5000/api/cities/activity/${params.city}`)
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
