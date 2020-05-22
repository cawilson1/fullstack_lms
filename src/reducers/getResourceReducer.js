import {
  GET_RESOURCES_SUCCESS,
  GET_RESOURCES_ERROR,
} from "../actions/getResourceActions";

export const getResourcesReducer = (
  state = { resources: [], s3Resources: [], status: null },
  action
) => {
  switch (action.type) {
    case GET_RESOURCES_SUCCESS:
      return {
        ...state,
        resources: action.resources,
        s3Resources: action.s3Resources,
        status: action.type,
      };
    case GET_RESOURCES_ERROR:
      return {
        ...state,
        resources: [],
        s3Resources: [],
        status: action.type,
      };
    default:
      return { ...state };
  }
};
