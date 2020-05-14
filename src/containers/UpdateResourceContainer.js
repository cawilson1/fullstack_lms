import { connect } from "react-redux";
import { updateResourceInjector } from "../actions/updateResourceActions";
import UpdateResource from "../components/UpdateResource";

const mapStateToProps = (state) => {
  return {
    instructor: state.updateResourceReducer.instructor,
    data: state.updateResourceReducer.data,
    uuid: state.updateResourceReducer.uuid,
    url: state.updateResourceReducer.url,
    urlDescription: state.updateResourceReducer.urlDescription,
    urlTitle: state.updateResourceReducer.urlTitle,
    status: state.updateResourceReducer.type,
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
