import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import { charsReducer } from "./reducers/starWarsReducer";
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const enhancer = compose(applyMiddleware(thunk, logger));

// https://github.com/JamieHall1962/Redux-Swapi/pull/1


// needed dependancies
// applyMiddleware from redux
// thunk from redux-thunk
// logger from redux-logger
// rootReducer from ./reducers

const store = createStore(charsReducer, enhancer);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
