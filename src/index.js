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

Amplify.configure(awsExports);

const store = createStore(rootReducer, applyMiddleware(logger));

const styles = {
  navWrapper: {
    justifyContent: "center",
  },
  navCont: {
    justifyContent: "center",
  },
  universal: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "10vw",
    marginRight: "10vw",
    marginTop: "70px",
    justifyContent: "center",
  },
};

ReactDOM.render(
  <Provider store={store}>
    <div style={styles.NavWrapper}>
      <NavContainer style={styles.navCont} />
    </div>
    <App style={styles.universal} />
  </Provider>,
  document.getElementById("root")
);
