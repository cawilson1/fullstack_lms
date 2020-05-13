import { API, graphqlOperation } from "aws-amplify";
import { createResource } from "../graphql/mutations";

const CREATE_RESOURCE_SUCCESS = "CREATE_RESOURCE_SUCCESS";
const CREATE_RESOURCE_ERROR = "CREATE_RESOURCE_ERROR";
const CREATE_RESOURCE_REQUEST = "CREATE_RESOURCE_REQUEST";

const UPDATE_RESOURCE_SUCCESS = "UPDATE_RESOURCE_SUCCESS";
const UPDATE_RESOURCE_ERROR = "UPDATE_RESOURCE_ERROR";
const UPDATE_RESOURCE_REQUEST = "UPDATE_RESOURCE_REQUEST";

const DELETE_RESOURCE_SUCCESS = "DELETE_RESOURCE_SUCCESS";
const DELETE_RESOURCE_ERROR = "DELETE_RESOURCE_ERROR";
const DELETE_RESOURCE_REQUEST = "DELETE_RESOURCE_REQUEST";

const SHOW_RESOURCES = "SHOW_RESOURCES";

const GET_RESOURCES_REQUEST = "GET_RESOURCES_REQUEST";
const GET_RESOURCES_SUCCESS = "GET_RESOURCES_SUCCESS";
const GET_RESOURCES_ERROR = "GET_RESOURCES_ERROR";

const createResourceRequest = (resource) => {
  return {
    type: CREATE_RESOURCE_REQUEST,
    resource,
  };
};

const createResourceSuccess = () => {
  return {
    type: CREATE_RESOURCE_SUCCESS,
  };
};

const createResourceError = () => {
  return {
    type: CREATE_RESOURCE_ERROR,
  };
};

const attemptCreateResource = async (dispatch, resource) => {
  dispatch(createResourceRequest(resource));
  try {
    const request = await API.graphqlOperation(createResource, resource);
    dispatch(createResourceSuccess());
  } catch (error) {
    dispatch(createResourceError());
    console.error("attemptCreateResourceERR", error);
  }
};

export const createResourceInjector = (dispatch) => {
  return (resource) => {
    attemptCreateResource(dispatch, resource);
  };
};

// const showResources = (resource) => {
//   return {
//     type: SHOW_RESOURCES,
//     resource: resource,
//   };
// };

// const getResources = (id) => {
//   return {
//     type: GET_RESOURCES,
//     id,
//   };
// };
