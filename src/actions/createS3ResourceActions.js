import { Storage } from "aws-amplify";
import { v4 as uuidv4 } from "uuid";

export const CREATE_S3_RESOURCE_SUCCESS = "CREATE_RESOURCE_SUCCESS";
export const CREATE_S3_RESOURCE_ERROR = "CREATE_RESOURCE_ERROR";
export const CREATE_S3_RESOURCE_REQUEST = "CREATE_RESOURCE_REQUEST";

const createS3ResourceRequest = (s3Resource) => {
  return {
    type: CREATE_S3_RESOURCE_REQUEST,
    s3Resource,
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

const attemptCreateS3Resource = async (dispatch, s3Resource) => {
  dispatch(createS3ResourceRequest(s3Resource));
  const uuid = uuidv4() + ".png";
  try {
    const request = await Storage.put("test/" + uuid, s3Resource, {
      contentType: "image/png",
    });
    dispatch(createS3ResourceSuccess());
  } catch (error) {
    dispatch(createS3ResourceError());
    console.error("attemptCreateS3ResourceERR", error);
  }
};

export const createS3ResourceInjector = (dispatch) => {
  console.log("createS3injector");
  return (s3Resource) => {
    attemptCreateS3Resource(dispatch, s3Resource);
  };
};
