import {
  UPDATE_POST_REQUEST,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_ERROR,
} from "../actions/updatePostActions";

const initialState = {
  author: null,
  data: null,
  status: null,
};

export const updatePostReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_POST_REQUEST:
      return {
        ...state,
        author: action.author,
        data: action.data,
        status: action.type,
      };
    case UPDATE_POST_SUCCESS:
      return {
        ...state,
        author: null,
        data: null,
        status: action.type,
      };
    case UPDATE_POST_ERROR:
      return {
        ...state,
        author: null,
        data: null,
        status: action.type,
      };
    default:
      return { ...state };
  }
};
