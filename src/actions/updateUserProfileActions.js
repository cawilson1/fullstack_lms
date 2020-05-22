import axios from "axios";

export const UPDATE_PROFILE_REQUEST = "UPDATE_PROFILE_REQUEST";
export const UPDATE_PROFILE_SUCCESS = "UPDATE_PROFILE_SUCCESS";
export const UPDATE_PROFILE_ERROR = "UPDATE_PROFILE_ERROR";

const updateProfileRequest = (modifiedProfile) => {
  return {
    type: UPDATE_PROFILE_REQUEST,
    modifiedProfile,
  };
};

const updateProfileSuccess = () => {
  return {
    type: UPDATE_PROFILE_SUCCESS,
  };
};

const updateProfileError = () => {
  return {
    type: UPDATE_PROFILE_ERROR,
  };
};

const attemptUpdateProfileRequest = async (dispatch, modifiedProfile) => {
  dispatch(updateProfileRequest(modifiedProfile));
  try {
    await axios({
      method: "put",
      url:
        "https://s9alxvtcob.execute-api.us-east-1.amazonaws.com/dev/update_user",
      data: modifiedProfile,
      header: {
        "Content-Type": "application/json",
      },
    });
    dispatch(updateProfileSuccess());
  } catch (error) {
    dispatch(updateProfileError());
    console.error("Error Updating Profile", error);
  }
};

export const updateProfileInjector = (dispatch) => {
  return (modifiedProfile) =>
    attemptUpdateProfileRequest(dispatch, modifiedProfile);
};
