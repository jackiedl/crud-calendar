import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from './App';
import { Provider } from "react-redux";
// import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./redux/rootReducer";

const contianer = document.getElementById('root');
const root = createRoot(contianer);

//const store = createStore(rootReducer, compose(applyMiddleware(thunk)))

const store = createStore(rootReducer, composeWithDevTools());

console.log(store.getState())

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

