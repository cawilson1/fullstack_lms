import { API, graphqlOperation, Storage } from "aws-amplify";
import { S3Text, S3Image } from "aws-amplify-react";
import { v4 as uuidv4 } from "uuid";

export const CREATE_S3_RESOURCE_SUCCESS = "CREATE_RESOURCE_SUCCESS";
export const CREATE_S3_RESOURCE_ERROR = "CREATE_RESOURCE_ERROR";
export const CREATE_S3_RESOURCE_REQUEST = "CREATE_RESOURCE_REQUEST";

const createS3ResourceRequest = (resource) => {
  return {
    type: CREATE_S3_RESOURCE_REQUEST,
    resource,
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

const attemptCreateS3Resource = async (dispatch, resource) => {
  dispatch(createS3ResourceRequest(resource));
  try {
    const request = await API.graphql(
      graphqlOperation(createResource, {
        input: resource,
      })
    );
    dispatch(createS3ResourceSuccess());
  } catch (error) {
    dispatch(createS3ResourceError());
    console.error("attemptCreateS3ResourceERR", error);
  }
};

export const createS3ResourceInjector = (dispatch) => {
  return (resource) => {
    attemptCreateS3Resource(dispatch, resource);
  };
};
