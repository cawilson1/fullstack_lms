import { connect } from "react-redux";
import { getResourcesInjector } from "../actions/getResourceActions";
import { deleteResourceInjector } from "../actions/deleteResourceActions";

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
  };
};

const ResourcesListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResourceList);

export default ResourcesListContainer;
