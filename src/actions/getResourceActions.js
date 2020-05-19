import { API, graphqlOperation } from "aws-amplify";
import { listResources } from "../graphql/queries";

export const GET_RESOURCES_REQUEST = "GET_RESOURCES_REQUEST";
export const GET_RESOURCES_SUCCESS = "GET_RESOURCES_SUCCESS";
export const GET_RESOURCES_ERROR = "GET_RESOURCES_ERROR";

const getResourcesRequest = () => {
  return {
    type: GET_RESOURCES_REQUEST,
  };
};

export const getResourcesSuccess = (response) => {
  return {
    type: GET_RESOURCES_SUCCESS,
    resources: response,
  };
};

const getResourcesError = () => {
  return {
    type: GET_RESOURCES_ERROR,
  };
};

const attemptGetResources = async (dispatch) => {
  dispatch(getResourcesRequest());
  try {
    const response = await API.graphql(
      graphqlOperation(listResources, {
        limit: 20,
        // nextToken: response.data.listResources.nextToken,
      })
    );
    console.log("attemptGetResources", response);
    response.data &&
      dispatch(getResourcesSuccess(response.data.listResources.items));
  } catch (error) {
    dispatch(getResourcesError());
    console.error("attemptGetResourcesError", error);
  }
};

export const getResourcesInjector = (dispatch) => {
  return () => attemptGetResources(dispatch);
};
