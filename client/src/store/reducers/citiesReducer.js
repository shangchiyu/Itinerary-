const initState = [];

const citiesReducer = (state = initState, action) => {
  console.log("action", action);
  switch (action.type) {
    case "GET_CITIES":
      return { ...state, cities: action.payload };
    default:
      return state;
  }
};
export default citiesReducer;
