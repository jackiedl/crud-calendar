import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
//import combineReducers from "../reducers";

const configureStore = createStore(
  composeWithDevTools(applyMiddleware(thunk))
);

export default configureStore;