import { connect } from "react-redux";
import { getResourcesInjector } from "../actions/getResourceActions";

import ResourceList from "../components/ResourceList";

import { deleteResourceInjector } from "../actions/deleteResourceActions";

const mapStateToProps = (state) => {
  return {
    resources: state.getResourcesReducer.resources,
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
