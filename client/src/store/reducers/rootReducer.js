import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
import itineraryReducer from "./itineraryReducer";
import activityReducer from "./activityReducer";
import errorReducer from"./errorReducer"
import authReducer from"./authReducer"
const rootReducer = combineReducers({
  cities: citiesReducer,
  itineraries: itineraryReducer,
  activities: activityReducer,
  error: errorReducer,
  auth: authReducer
});

export default rootReducer;
