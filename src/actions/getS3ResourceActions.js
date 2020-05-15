import { Storage } from "aws-amplify";

export const GET_S3_RESOURCE_REQUEST = "GET_S3_RESOURCE_REQUEST";
export const GET_S3_RESOURCE_SUCCESS = "GET_S3_RESOURCE_SUCCESS";
export const GET_S3_RESOURCE_ERROR = "GET_S3_RESOURCE_ERROR";

const getS3ResourceRequest = () => {
  return {
    type: GET_S3_RESOURCE_REQUEST,
  };
};

const getS3ResourceSuccess = () => {
  return {
    type: GET_S3_RESOURCE_SUCCESS,
  };
};

const getS3ResourceError = () => {
  return {
    type: GET_S3_RESOURCE_ERROR,
  };
};

const getS3ResourceAttempt = async (dispatch) => {
  dispatch(getS3ResourceRequest());
  try {
    const response = await Storage.list("test/", {
      level: "public",
      contentType: "image/png",
    });
    dispatch(getS3ResourceSuccess());
  } catch (error) {
    dispatch(getS3ResourceError());
    console.error(error);
  }
};

export const getS3ResourceInjector = (dispatch) => {
  return () => getS3ResourceAttempt(dispatch);
};
