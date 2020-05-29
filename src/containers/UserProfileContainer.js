import { connect } from "react-redux";
import { getProfileInjector } from "../actions/getUserProfileActions";
import UserProfile from "../components/UserProfile";

const mapStateToProps = (state) => {
  return {
    profile: state.getUserProfileReducer.profile,
    s3Avatar: state.getUserProfileReducer.s3Avatar,
    status: state.getUserProfileReducer.status,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    boundGetUserProfile: getProfileInjector(dispatch),
  };
};

const UserProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);

export default UserProfileContainer;
