import { API, graphqlOperation } from "aws-amplify";
import { updateResource } from "../graphql/mutations";

export const UPDATE_RESOURCE_SUCCESS = "UPDATE_RESOURCE_SUCCESS";
export const UPDATE_RESOURCE_ERROR = "UPDATE_RESOURCE_ERROR";
export const UPDATE_RESOURCE_REQUEST = "UPDATE_RESOURCE_REQUEST";

export const updateResourceRequest = (modifiedResource) => {
  return {
    type: UPDATE_RESOURCE_REQUEST,
    modifiedResource,
  };
};

const updateResourceSuccess = () => {
  return {
    type: UPDATE_RESOURCE_SUCCESS,
  };
};

const updateResourceError = () => {
  return {
    type: UPDATE_RESOURCE_ERROR,
  };
};

const attemptUpdateResource = async (dispatch, modifiedResource) => {
  dispatch(updateResourceRequest());
  try {
    const request = await API.graphql(
      graphqlOperation(updateResource, {
        input: modifiedResource,
      })
    );
    dispatch(updateResourceSuccess());
  } catch (error) {
    dispatch(updateResourceError());
    console.log("AttemptUpdateResourceERR", error);
  }
};

export const updateResourceInjector = (dispatch) => {
  return (modifiedResource) =>
    attemptUpdateResource(dispatch, modifiedResource);
};
