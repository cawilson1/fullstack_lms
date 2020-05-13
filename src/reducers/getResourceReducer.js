import {
  GET_RESOURCES_SUCCESS,
  GET_RESOURCES_ERROR,
} from "../actions/getResourceActions";

export const getResourcesReducer = (
  state = { resources: [], status: null },
  action
) => {
  switch (action.type) {
    case GET_RESOURCES_SUCCESS:
      return {
        ...state,
        resources: action.resources,
        status: action.type,
      };
    case GET_RESOURCES_ERROR:
      return {
        ...state,
        resources: [],
        state: action.type,
      };
    default:
      return { ...state };
  }
};
