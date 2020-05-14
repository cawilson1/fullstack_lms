import { Storage } from "aws-amplify";
import { S3Text, S3Image } from "aws-amplify-react";
import { v4 as uuidv4 } from "uuid"; //to component?

export const CREATE_S3_RESOURCE_SUCCESS = "CREATE_RESOURCE_SUCCESS";
export const CREATE_S3_RESOURCE_ERROR = "CREATE_RESOURCE_ERROR";
export const CREATE_S3_RESOURCE_REQUEST = "CREATE_RESOURCE_REQUEST";

const createS3ResourceRequest = (uuid, file) => {
  return {
    type: CREATE_S3_RESOURCE_REQUEST,
    uuid,
    file,
  };
};

const createS3ResourceSuccess = () => {
  return {
    type: CREATE_S3_RESOURCE_SUCCESS,
  };
};

const createS3ResourceError = () => {
  return {
    type: CREATE_S3_RESOURCE_ERROR,
  };
};

const attemptCreateS3Resource = async (dispatch, uuid, file) => {
  dispatch(createS3ResourceRequest(s3resource));
  try {
    const request = Storage.put("test/" + uuid, file, {
      contentType: "image",
    });
    dispatch(createS3ResourceSuccess());
  } catch (error) {
    dispatch(createS3ResourceError());
    console.error("attemptCreateS3ResourceERR", error);
  }
};

export const createS3ResourceInjector = (dispatch) => {
  return (uuid, file) => {
    attemptCreateS3Resource(dispatch, uuid, file);
  };
};
