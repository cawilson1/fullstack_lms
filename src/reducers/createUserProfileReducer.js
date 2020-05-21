import {
  CREATE_PROFILE_REQUEST,
  CREATE_PROFILE_SUCCESS,
  CREATE_PROFILE_ERROR,
} from "../actions/createUserProfileActions";

const initialState = {
  username: "",
  firstname: "",
  lastname: "",
  email: "",
  bio: "",
  github: "",
  avatar: "",
  status: null,
};

export const createUserProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PROFILE_REQUEST:
      return {
        ...state,
        username: action.username,
        firstname: action.firstname,
        lastname: action.lastname,
        email: action.email,
        bio: action.bio,
        github: action.github,
        avatar: action.avatar,
      };
    case CREATE_PROFILE_SUCCESS:
      return {
        ...state,
        username: "",
        firstname: "",
        lastname: "",
        email: "",
        bio: "",
        github: "",
        avatar: "",
        status: action.type,
      };
    case CREATE_PROFILE_ERROR:
      return {
        ...state,
        username: "",
        firstname: "",
        lastname: "",
        email: "",
        bio: "",
        github: "",
        avatar: "",
        status: action.type,
      };
    default:
      return { ...state };
  }
};
