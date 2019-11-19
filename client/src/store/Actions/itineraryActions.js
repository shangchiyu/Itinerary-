import axios from "axios";
import { GET_ITINERARY } from "./type";
// import { useParams } from "react-router-dom";
// componentDidMount() {
//   const { match: { params } } = this.props;

//   axios.get(`/api/users/${params.userId}`)
//     .then(({ data: user }) => {
//       console.log('user', user);

//       this.setState({ user });
//     });
// }
const getData = city => {
  //   console.log();
  return {
    type: GET_ITINERARY,
    payload: city
  };
};

export const getCity = () => {
  // console.log("here");
  return dispatch => {
    console.log("dispatch", dispatch);
    return axios
      .get("http://localhost:5000/api/cities/:city")
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
