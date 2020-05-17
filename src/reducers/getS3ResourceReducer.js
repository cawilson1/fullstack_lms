import {
  GET_S3_RESOURCE_SUCCESS,
  GET_S3_RESOURCE_ERROR,
} from "../actions/getS3ResourceActions";

export const getS3ResourceReducer = (
  state = { s3Resource: "", uuid: null, status: null },
  action
) => {
  console.log("From GetS3 Reducer", state.uuid, "b", action.uuid);
  switch (action.type) {
    case GET_S3_RESOURCE_SUCCESS:
      return {
        ...state,
        s3Resource: action.s3Resource,
        uuid: action.uuid,
        status: action.type,
      };
    case GET_S3_RESOURCE_ERROR:
      return {
        ...state,
        s3Resource: "",
        uuid: null,
        status: action.type,
      };
    default:
      return { ...state };
  }
};
