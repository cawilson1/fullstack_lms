import { connect } from "react-redux";
import { updateProfileInjector } from "../actions/updateUserProfileActions";
import EditUserProfile from "../components/EditUserProfile";

const mapStateToProps = (state, ownProps) => {
  return {
    isToggle: ownProps.isToggle,
    setIsToggle: ownProps.setIsToggle,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    boundUpdateUserProfile: updateProfileInjector(dispatch),
  };
};

const UpdateUserProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditUserProfile);

export default UpdateUserProfileContainer;
