import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import logger from "redux-logger";
import { applyMiddleware, createStore } from "redux";
import NavContainer from "./containers/NavContainer";
import AppContainer from "./containers/AppContainer";
import { rootReducer } from "./reducers/combineReducers";

import Amplify from "aws-amplify";
import awsExports from "./aws-exports";

import App from "./App";
// import "./index.css";

Amplify.configure(awsExports);

const store = createStore(rootReducer, applyMiddleware(logger));

const styles = {
  NavCont: {
    marginLeft: "35px",
  },
  universal: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "10vw",
    marginRight: "10vw",
    marginTop: "10vw",
    justifyContent: "center",
  },
};

ReactDOM.render(
  <Provider store={store}>
    <NavContainer style={styles.NavCont} />
    <App style={styles.universal} />
    {/* <App style={styles.universal} /> */}
  </Provider>,
  document.getElementById("root")
);
