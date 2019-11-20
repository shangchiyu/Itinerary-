const initState = [];
const activityReducer = (state = initState, action) => {
  console.log("action", action);
  switch (action.type) {
    case "GET_ACTIVITY":
      return { ...state, activity: action.payload };
    default:
      return state;
  }
};
export default activityReducer;
