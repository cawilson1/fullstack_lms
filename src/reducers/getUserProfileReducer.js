import {
  GET_PROFILE_SUCCESS,
  GET_PROFILE_ERROR,
} from "../actions/getUserProfileActions";

export const getUserProfileReducer = (
  state = { profile: [], status: null },
  action
) => {
  switch (action.type) {
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.profile,
        status: action.type,
      };
    case GET_PROFILE_ERROR:
      return {
        ...state,
        profile: [],
        status: action.type,
      };
    default:
      return { ...state };
  }
};
