import { connect } from "react-redux";
import { updatePostInjector } from "../actions/updatePostActions";
import UpdatePost from "../components/UpdatePost";

const mapStateToProps = (state, ownProps) => {
  return {
    author: state.updatePostReducer.author,
    data: state.updatePostReducer.data,
    status: state.updatePostReducer.status,
    isToggleUpdate: ownProps.isToggleUpdate,
    setIsToggleUpdate: ownProps.setIsToggleUpdate,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    boundUpdatePost: updatePostInjector(dispatch),
  };
};

const UpdatePostContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdatePost);

export default UpdatePostContainer;
