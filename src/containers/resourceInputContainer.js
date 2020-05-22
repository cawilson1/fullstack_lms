import { connect } from "react-redux";
import { createResourceInjector } from "../actions/createResourceActions";
import ResourceInput from "../components/ResourceInput";

const mapDispatchToProps = (dispatch) => {
  return {
    boundCreateResource: createResourceInjector(dispatch),
  };
};

const ResourceInputContainer = connect(null, mapDispatchToProps)(ResourceInput);

export default ResourceInputContainer;
