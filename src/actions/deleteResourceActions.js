import { deleteResource } from "../graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";

export const DELETE_RESOURCE_SUCCESS = "DELETE_RESOURCE_SUCCESS";
export const DELETE_RESOURCE_ERROR = "DELETE_RESOURCE_ERROR";
export const DELETE_RESOURCE_REQUEST = "DELETE_RESOURCE_REQUEST";

const deleteResourceRequest = (id) => {
  return {
    type: DELETE_RESOURCE_REQUEST,
    id,
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

const attemptDeleteResource = async (dispatch, id) => {
  dispatch(deleteResourceRequest(id));
  try {
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
  return (id) => attemptDeleteResource(dispatch, id);
};
