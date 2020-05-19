import { Storage } from "aws-amplify";

export const UPDATE_S3_RESOURCE_SUCCESS = "UPDATE_S3_RESOURCE_SUCCESS";
export const UPDATE_S3_RESOURCE_ERROR = "UPDATE_S3_RESOURCE_ERROR";
export const UPDATE_S3_RESOURCE_REQUEST = "UPDATE_S3_RESOURCE_REQUEST";

export const updateS3ResourceRequest = (modifiedS3Resource) => {
  return {
    type: UPDATE_S3_RESOURCE_REQUEST,
    modifiedS3Resource,
  };
};

const updateS3ResourceSuccess = () => {
  return {
    type: UPDATE_S3_RESOURCE_SUCCESS,
  };
};

const updateS3ResourceError = () => {
  return {
    type: UPDATE_S3_RESOURCE_ERROR,
  };
};

const attemptUpdateS3Resource = async (dispatch, modifiedS3Resource) => {
  dispatch(updateS3ResourceRequest());
  try {
    const response = await Storage.put("test/", {
      level: "public",
      contentType: "image/png",
    });
    dispatch(updateS3ResourceSuccess());
  } catch (error) {
    dispatch(updateS3ResourceError());
    console.log("AttemptUpdateS3ResourceERR", error);
  }
};

export const updateS3ResourceInjector = (dispatch) => {
  return (modifiedS3Resource) =>
    attemptUpdateS3Resource(dispatch, modifiedS3Resource);
};
