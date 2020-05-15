import { connect } from "react-redux";
import { updateResourceInjector } from "../actions/updateResourceActions";
import UpdateResource from "../components/UpdateResource";

const mapStateToProps = (state, ownProps) => {
  console.log("OwnProps", ownProps);
  return {
    instructor: state.updateResourceReducer.instructor,
    data: state.updateResourceReducer.data,
    uuid: state.updateResourceReducer.uuid,
    url: state.updateResourceReducer.url,
    urlDescription: state.updateResourceReducer.urlDescription,
    urlTitle: state.updateResourceReducer.urlTitle,
    status: state.updateResourceReducer.type,
    isToggleUpdate: ownProps.isToggleUpdate,
    setIsToggleUpdate: ownProps.setIsToggleUpdate,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    boundUpdateResource: updateResourceInjector(dispatch),
  };
};

const UpdateResourceContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateResource);

export default UpdateResourceContainer;
