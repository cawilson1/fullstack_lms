import { connect } from "react-redux";
import { createS3ResourceInjector } from "../actions/createS3ResourceActions";
import S3ResourceInput from "../components/S3ResourceInput";

const mapStateToProps = (state) => {
  return {
    uuid: state.createS3ResourceReducer.uuid,
    file: state.createS3ResourceReducer.file,
    status: state.createS3ResourceReducer.status,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    boundS3CreateResource: createS3ResourceInjector(dispatch),
  };
};

const S3ResourceInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(S3ResourceInput);

export default S3ResourceInputContainer;
