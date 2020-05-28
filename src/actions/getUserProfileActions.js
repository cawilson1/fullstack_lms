import axios from "axios";
import { Auth } from "aws-amplify";

export const GET_PROFILE_REQUEST = "GET_PROFILE_REQUEST";
export const GET_PROFILE_SUCCESS = "GET_PROFILE_SUCCESS";
export const GET_PROFILE_ERROR = "GET_PROFILE_ERROR";

const getProfileRequest = () => {
  return {
    type: GET_PROFILE_REQUEST,
  };
};

const getProfileSuccess = (response) => {
  return {
    type: GET_PROFILE_SUCCESS,
    profile: response,
  };
};

const getProfileError = () => {
  return {
    type: GET_PROFILE_ERROR,
  };
};

export const attemptGetProfile = async (dispatch) => {
  dispatch(getProfileRequest());
  // console.log("from the actions 1");

  try {
    // console.log("from the actions 2");

    const getUsername = await Auth.currentUserInfo();
    const username = getUsername.username;
    // console.log("from the actions 3", username);

    const response = await axios({
      method: "get",
      url: `https://s9alxvtcob.execute-api.us-east-1.amazonaws.com/dev/user?username=${username}`,
    });
    dispatch(getProfileSuccess(response.data[0][0]));
    // console.log("from the actions 4");
  } catch (error) {
    dispatch(getProfileError());
    console.error("GetProfileERR", error);
  }
};

export const getProfileInjector = (dispatch) => {
  console.log("The Injectorrrr");
  return () => attemptGetProfile(dispatch);
};
