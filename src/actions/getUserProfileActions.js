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

const attemptGetProfile = async (dispatch) => {
  dispatch(getProfileRequest());
  try {
    // console.log(await Auth.currentUserInfo(), "Bananas");
    const getUsername = await Auth.currentUserInfo();
    const username = getUsername.username;
    console.log(username);
    const response = await axios({
      method: "get",
      url: `https://s9alxvtcob.execute-api.us-east-1.amazonaws.com/dev/user?username=${username}`,
    });
    // response.data &&
    console.log("GetProfileResponse", response.data);
    dispatch(getProfileSuccess(response.data[0][0]));
  } catch (error) {
    dispatch(getProfileError());
    console.error("GetProfileERR", error);
  }
};

export const getProfileInjector = (dispatch) => {
  return () => attemptGetProfile(dispatch);
};
