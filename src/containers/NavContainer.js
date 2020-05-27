import { connect } from "react-redux";
import NavDrawer from "../components/NavDrawer";
import { getProfileInjector } from "../actions/getUserProfileActions";

// const mapStateToProps = (state) => {
//   return {
//     firstname: state.getUserProfileReducer.profile.firstname,
//     lastname: state.getUserProfileReducer.profile.lastname,
//     avatar: state.getUserProfileReducer.profile.avatar,
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    boundLoadProfile: getProfileInjector(dispatch),
  };
};

const NavContainer = connect(null, mapDispatchToProps)(NavDrawer);

export default NavContainer;
