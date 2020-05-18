import {
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_ERROR,
} from "../actions/createPostActions";

const initialState = {
  author: null,
  data: null,
  uuid: null,
  status: null,
};

export const createPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST_REQUEST:
      return {
        ...state,
        author: action.author,
        data: action.data,
        uuid: action.uuid,
        status: action.type,
      };
    case CREATE_POST_SUCCESS:
      return { ...state, status: action.type };
    case CREATE_POST_ERROR:
      return {
        ...state,
        author: null,
        data: null,
        uuid: null,
        status: action.type,
      };
    default:
      return { ...state };
  }
};
