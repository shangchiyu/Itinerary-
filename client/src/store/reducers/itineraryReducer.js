const initState = [];
const itineraryReducer = (state = initState, action) => {
  console.log("action", action);
  switch (action.type) {
    case "GET_ITINERARY":
      return { ...state, itinerary: action.payload };
    default:
      return state;
  }
};
export default itineraryReducer;