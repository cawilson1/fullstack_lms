import { connect } from "react-redux";
import { createResourceInjector } from "../actions/createResourceActions";
import { createS3ResourceInjector } from "../actions/createS3ResourceActions";
import ResourceInput from "../components/ResourceInput";

const mapDispatchToProps = (dispatch) => {
  return {
    boundCreateResource: createResourceInjector(dispatch),
    boundS3CreateResource: createS3ResourceInjector(dispatch),
  };
};

const ResourceInputContainer = connect(null, mapDispatchToProps)(ResourceInput);

export default ResourceInputContainer;
