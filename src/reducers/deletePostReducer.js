import {
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  DELETE_POST_ERROR,
} from "../actions/deletePostActions";

const initialState = {
  id: null,
};

export const deletePostReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_POST_REQUEST:
      return {
        ...state,
        id: action.id,
        status: action.type,
      };
    case DELETE_POST_SUCCESS:
      return {
        ...state,
        id: null,
        status: action.type,
      };
    case DELETE_POST_ERROR:
      return {
        ...state,
        id: null,
        status: action.type,
      };
    default:
      return { ...state };
  }
};
