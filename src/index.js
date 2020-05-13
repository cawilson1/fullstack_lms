import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import logger from "redux-logger";
import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./reducers/combineReducers";

import Amplify from "aws-amplify";
import awsExports from "./aws-exports";

import App from "./App";
import "./index.css";

Amplify.configure(awsExports);

const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
