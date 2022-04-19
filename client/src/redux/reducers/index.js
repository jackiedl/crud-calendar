import { combineReducers } from "redux";
import { DateReducer } from "./DateReducer";
import { CalendarReducer } from "./CalendarReducer";

export default combineReducers({
  date:DateReducer, 
  calendar:CalendarReducer,
});
