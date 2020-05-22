import { connect } from "react-redux";
import {
  getResourcesInjector,
  // getResourcesSuccess,
} from "../actions/getResourceActions";
// import { getS3ResourceInjector } from "../actions/getS3ResourceActions";
import { deleteResourceInjector } from "../actions/deleteResourceActions";
// import { deleteS3ResourceInjector } from "../actions/deleteS3ResourceActions";

import ResourceList from "../components/ResourceList";

const mapStateToProps = (state) => {
  return {
    resources: state.getResourcesReducer.resources,
    s3Resources: state.getResourcesReducer.s3Resources,
    status: state.getResourcesReducer.status,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    boundAttemptGetResources: getResourcesInjector(dispatch),
    boundAttemptDeleteResource: deleteResourceInjector(dispatch),
    // boundAttemptGetS3Resources: getS3ResourceInjector(dispatch),
    // boundAttemptDeleteS3Resource: deleteS3ResourceInjector(dispatch),
    // boundNewListAfterMutation: () => dispatch(getResourcesSuccess()),
  };
};

const ResourcesListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResourceList);

export default ResourcesListContainer;
