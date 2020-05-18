import {
  GET_S3_RESOURCE_SUCCESS,
  GET_S3_RESOURCE_ERROR,
} from "../actions/getS3ResourceActions";

export const getS3ResourceReducer = (
  state = { s3Resource: [], status: null },
  action
) => {
  switch (action.type) {
    case GET_S3_RESOURCE_SUCCESS:
      return {
        ...state,
        s3Resource: action.s3Resource,
        status: action.type,
      };
    case GET_S3_RESOURCE_ERROR:
      return {
        ...state,
        s3Resource: "",
        status: action.type,
      };
    default:
      return { ...state };
  }
};
