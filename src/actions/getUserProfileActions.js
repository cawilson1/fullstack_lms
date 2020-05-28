import axios from "axios";
import { Auth, Storage } from "aws-amplify";

export const GET_PROFILE_REQUEST = "GET_PROFILE_REQUEST";
export const GET_PROFILE_SUCCESS = "GET_PROFILE_SUCCESS";
export const GET_PROFILE_ERROR = "GET_PROFILE_ERROR";

const getProfileRequest = () => {
  return {
    type: GET_PROFILE_REQUEST,
  };
};

const getProfileSuccess = (profileResponse, s3Avatar) => {
  return {
    type: GET_PROFILE_SUCCESS,
    profile: profileResponse,
    s3Avatar: s3Avatar,
  };
};

const getProfileError = () => {
  return {
    type: GET_PROFILE_ERROR,
  };
};

export const attemptGetProfile = async (dispatch) => {
  dispatch(getProfileRequest());
  try {
    const getUsername = await Auth.currentUserInfo();
    const username = await getUsername.username;
    const response = await axios({
      method: "get",
      url: `https://s9alxvtcob.execute-api.us-east-1.amazonaws.com/dev/user?username=${username}`,
    });
    console.log("Axios", response.data[0][0]);
    if (response.data[0][0] == undefined) {
      let response = undefined;
      let s3Avatar = undefined;
      dispatch(getProfileSuccess(response, s3Avatar));
    } else {
      console.log(response.data[0][0]);
      const avatarUuid = response.data[0][0].avatar;
      const s3Avatar = await Storage.get("test/" + avatarUuid, {
        // level: "protected",
        contentType: "image/png",
      });
      const profileResponse = response.data[0][0];
      dispatch(getProfileSuccess(profileResponse, s3Avatar));
    }
  } catch (error) {
    dispatch(getProfileError());
    console.error("GetProfileERR", error);
  }
};

export const getProfileInjector = (dispatch) => {
  return () => attemptGetProfile(dispatch);
};
