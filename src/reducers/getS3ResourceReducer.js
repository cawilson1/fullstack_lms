import {
  GET_S3_RESOURCE_SUCCESS,
  GET_S3_RESOURCE_ERROR,
} from "../actions/getS3ResourceActions";

export const getS3ResourceReducer = (
  state = { s3Resources: [], status: null },
  action
) => {
  switch (action.type) {
    case GET_S3_RESOURCE_SUCCESS:
      return {
        ...state,
        s3Resources: action.s3Resources,
        status: action.type,
      };
    case GET_S3_RESOURCE_ERROR:
      return {
        ...state,
        s3Resources: [],
        status: action.type,
      };
    default:
      return { ...state };
  }
};
