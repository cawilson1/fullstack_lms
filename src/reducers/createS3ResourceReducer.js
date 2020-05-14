import {
  CREATE_S3_RESOURCE_REQUEST,
  CREATE_S3_RESOURCE_SUCCESS,
  CREATE_S3_RESOURCE_ERROR,
} from "../actions/createS3ResourceActions";

const initialState = {
  uuid: null,
  file: null,
  status: null,
};

export const createS3ResourceReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_S3_RESOURCE_REQUEST:
      return {
        ...state,
        uuid: action.uuid,
        file: action.file,
        status: action.type,
      };
    case CREATE_S3_RESOURCE_SUCCESS:
      return {
        ...state,
        uuid: null,
        file: null,
        status: action.type,
      };
    case CREATE_S3_RESOURCE_ERROR:
      return {
        ...state,
        uuid: null,
        file: null,
        status: action.type,
      };
    default:
      return { ...state };
  }
};
