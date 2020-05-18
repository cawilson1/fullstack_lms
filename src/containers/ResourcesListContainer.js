import { connect } from "react-redux";
import { getResourcesInjector } from "../actions/getResourceActions";
import { getS3ResourceInjector } from "../actions/getS3ResourceActions";
import { deleteResourceInjector } from "../actions/deleteResourceActions";

import ResourceList from "../components/ResourceList";

const mapStateToProps = (state) => {
  return {
    resources: state.getResourcesReducer.resources,
    status: state.getResourcesReducer.status,
    s3Resource: state.getS3ResourceReducer.s3Resource,
    s3Status: state.getS3ResourceReducer.status,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    boundAttemptGetResources: getResourcesInjector(dispatch),
    boundAttemptDeleteResource: deleteResourceInjector(dispatch),
    boundAttemptGetS3Resources: getS3ResourceInjector(dispatch),
  };
};

const ResourcesListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResourceList);

export default ResourcesListContainer;
