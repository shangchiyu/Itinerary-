const initState = [];
const itineraryReducer = (state = initState, action) => {
  console.log("action", action.type);
  switch (action.type) {
    case "GET_ITINERARY":
      return { ...state, city: action.payload };
    default:
      return state;
  }
};
export default itineraryReducer;
