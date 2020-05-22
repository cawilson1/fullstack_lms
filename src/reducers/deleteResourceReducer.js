import {
  DELETE_RESOURCE_REQUEST,
  DELETE_RESOURCE_SUCCESS,
  DELETE_RESOURCE_ERROR,
} from "../actions/deleteResourceActions";

const initialState = {
  id: null,
  key: null,
};

export const deleteResourceReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_RESOURCE_REQUEST:
      return {
        ...state,
        id: action.id,
        key: action.key,
        status: action.type,
      };
    case DELETE_RESOURCE_SUCCESS:
      return {
        ...state,
        id: null,
        key: null,
        status: action.type,
      };
    case DELETE_RESOURCE_ERROR:
      return {
        ...state,
        id: null,
        key: null,
        status: action.type,
      };
    default:
      return { ...state };
  }
};
