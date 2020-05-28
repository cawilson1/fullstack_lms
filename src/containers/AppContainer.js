import { getProfileInjector } from "../actions/getUserProfileActions";
import { connect } from "react-redux";

import App from "../App";

const mapStateToProps = (state) => {
  if (state.getUserProfileReducer.profile == undefined) {
    return {
      usernameApp: state.getUserProfileReducer.profile.username,
    };
  } else {
    return {
      usernameApp: null,
    };
  }
};

const mapDispatchToProps = (dispatch) => {
  console.log("from MDTP in App Container");
  return {
    boundLoadProfile: getProfileInjector(dispatch),
    // boundLoadTheProfile: attemptGetProfile(dispatch),
  };
};

const AppContainer = connect(null, mapDispatchToProps)(App);

export default AppContainer;
