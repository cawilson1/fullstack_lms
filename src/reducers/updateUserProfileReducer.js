import {
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_ERROR,
} from "../actions/updateUserProfileActions";

const initialState = {
  username: null,
  firstname: null,
  lastname: null,
  email: null,
  bio: null,
  github: null,
  avatar: null,
  status: null,
};

export const updateUserProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROFILE_REQUEST:
      return {
        ...state,
        username: action.username,
        firstname: action.firstname,
        lastname: action.lastname,
        email: action.email,
        bio: action.bio,
        github: action.github,
        avatar: action.avatar,
        status: action.type,
      };
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        username: null,
        firstname: null,
        lastname: null,
        email: null,
        bio: null,
        github: null,
        avatar: null,
        status: action.type,
      };
    case UPDATE_PROFILE_ERROR:
      return {
        ...state,
        username: null,
        firstname: null,
        lastname: null,
        email: null,
        bio: null,
        github: null,
        avatar: null,
        status: action.type,
      };
    default:
      return { ...state };
  }
};
