import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { Storage } from "aws-amplify";
import { navigate } from "@reach/router";

export const CREATE_PROFILE_REQUEST = "CREATE_PROFILE_REQUEST";
export const CREATE_PROFILE_SUCCESS = "CREATE_PROFILE_SUCCESS";
export const CREATE_PROFILE_ERROR = "CREATE_PROFILE_ERROR";

const createProfileRequest = (profile) => {
  return {
    type: CREATE_PROFILE_REQUEST,
    profile: profile,
  };
};

const createProfileSuccess = () => {
  return {
    type: CREATE_PROFILE_SUCCESS,
  };
};

const createProfileError = () => {
  return {
    type: CREATE_PROFILE_ERROR,
  };
};

const attemptCreateProfileRequest = async (dispatch, profile) => {
  dispatch(createProfileRequest(profile));
  try {
    let imageResponse = "";
    if (profile.file !== "") {
      let extension = profile.file.name.split(".")[1];
      let uuidName = uuidv4() + "." + extension;
      imageResponse = await Storage.put("test/" + uuidName, profile.file, {
        contentType: "image/png",
      });
    }
    let profileToCreate = {
      username: profile.username,
      firstname: profile.firstname,
      lastname: profile.lastname,
      email: profile.email,
      bio: profile.bio,
      github: profile.github,
      avatar: imageResponse === "" ? "" : imageResponse.key.split("/")[1],
    };
    await axios({
      method: "post",
      url:
        "https://s9alxvtcob.execute-api.us-east-1.amazonaws.com/dev/create_user",
      data: profileToCreate,
      header: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      dispatch(createProfileSuccess());
      navigate("profile");
    });
  } catch (error) {
    dispatch(createProfileError());
    console.error("Error Creating Profile", error);
  }
};

export const createProfileInjector = (dispatch) => {
  return (profile) => attemptCreateProfileRequest(dispatch, profile);
};
