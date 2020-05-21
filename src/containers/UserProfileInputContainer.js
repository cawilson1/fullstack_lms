import { connect } from "react-redux";
import { createProfileInjector } from "../actions/createUserProfileActions";
import UserProfileInput from "../components/UserProfileInput";

const mapDispatchToProps = (dispatch) => {
  return {
    boundUserCreateProfile: createProfileInjector(dispatch),
  };
};

const UserProfileInputContainer = connect(
  null,
  mapDispatchToProps
)(UserProfileInput);

export default UserProfileInputContainer;
