import { deleteResource } from "../graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";
import { Storage } from "aws-amplify";

export const DELETE_RESOURCE_SUCCESS = "DELETE_RESOURCE_SUCCESS";
export const DELETE_RESOURCE_ERROR = "DELETE_RESOURCE_ERROR";
export const DELETE_RESOURCE_REQUEST = "DELETE_RESOURCE_REQUEST";

const deleteResourceRequest = (id, key) => {
  return {
    type: DELETE_RESOURCE_REQUEST,
    id,
    key,
  };
};

const deleteResourceSuccess = () => {
  return {
    type: DELETE_RESOURCE_SUCCESS,
  };
};

const deleteResourceError = () => {
  return {
    type: DELETE_RESOURCE_ERROR,
  };
};

const attemptDeleteResource = async (dispatch, id, key) => {
  dispatch(deleteResourceRequest(id, key));
  try {
    if (key !== "") await Storage.remove(key);
    const request = await API.graphql(
      graphqlOperation(deleteResource, {
        input: { id: id },
      })
    );
    dispatch(deleteResourceSuccess());
  } catch (error) {
    dispatch(deleteResourceError());
    console.error("AttemptDeleteResourceERR", error);
  }
};

export const deleteResourceInjector = (dispatch) => {
  return (id, key) => attemptDeleteResource(dispatch, id, key);
};
