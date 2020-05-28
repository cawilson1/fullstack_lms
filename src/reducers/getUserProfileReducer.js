import {
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_ERROR,
} from "../actions/getUserProfileActions";

export const getUserProfileReducer = (
  state = { profile: {}, s3Avatar: "", status: null },
  action
) => {
  switch (action.type) {
    case GET_PROFILE_REQUEST:
      return {
        ...state,
        status: action.type,
      };
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.profile,
        s3Avatar: action.s3Avatar,
        status: action.type,
      };
    case GET_PROFILE_ERROR:
      return {
        ...state,
        profile: {},
        s3Avatar: "",
        status: action.type,
      };
    default:
      return { ...state };
  }
};
