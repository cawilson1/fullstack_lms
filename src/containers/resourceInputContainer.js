import { connect } from "react-redux";
import { createResourceInjector } from "../actions/createResourceActions";
import ResourceInput from "../components/ResourceInput";

const mapStateToProps = (state) => {
  // console.log("mapStateToProp", state);
  return {
    instructor: state.createResourceReducer.instructor,
    data: state.createResourceReducer.data,
    uuid: state.createResourceReducer.uuid,
    url: state.createResourceReducer.url,
    urlDescription: state.createResourceReducer.urlDescription,
    urlTitle: state.createResourceReducer.urlTitle,
    status: state.createResourceReducer.type,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    boundCreateResource: createResourceInjector(dispatch),
  };
};

const ResourceInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResourceInput);

export default ResourceInputContainer;
