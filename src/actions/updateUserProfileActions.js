// import axios from "axios";

// export const CREATE_PROFILE_REQUEST = "CREATE_PROFILE_REQUEST";
// export const CREATE_PROFILE_SUCCESS = "CREATE_PROFILE_SUCCESS";
// export const CREATE_PROFILE_ERROR = "CREATE_PROFILE_ERROR";

// const createProfileRequest = (profile) => {
//   return {
//     type: CREATE_PROFILE_REQUEST,
//     profile: profile,
//   };
// };

// const createProfileSuccess = () => {
//   return {
//     type: CREATE_PROFILE_SUCCESS,
//   };
// };

// const createProfileError = () => {
//   return {
//     type: CREATE_PROFILE_ERROR,
//   };
// };

const attemptUpdateProfileRequest = async (dispatch, profile) => {
  dispatch(updateProfileRequest(profile));
  try {
    const response = await axios({
      method: "put",
      url:
        "https://s9alxvtcob.execute-api.us-east-1.amazonaws.com/dev/update_user",
      data: profile,
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

export const createProfileInjector = (dispatch) => {
  return (profile) => attemptCreateProfileRequest(dispatch, profile);
};
