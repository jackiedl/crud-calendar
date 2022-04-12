import { combineReducers } from 'redux'

import changeMonthReducer from "./reducers/ChangeMonthReducer";
//import loginReducer from "./reducers/LoginReducer";

const rootReducer = combineReducers({
  // Define a top-level state field named
  date: changeMonthReducer
})

export default rootReducer