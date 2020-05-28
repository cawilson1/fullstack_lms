import { connect } from "react-redux";
import NavDrawer from "../components/NavDrawer";

const mapDispatchToProps = (dispatch) => {
  return {
    boundLogOut: () => dispatch({ type: "LOGOUT" }),
  };
};

const NavContainer = connect(null, mapDispatchToProps)(NavDrawer);

export default NavContainer;
