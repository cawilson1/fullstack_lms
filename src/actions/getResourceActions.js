import { API, graphqlOperation } from "aws-amplify";
import { Storage } from "aws-amplify";

import { listResources } from "../graphql/queries";
import { sortByDate } from "../actions/sortByDate";

export const GET_RESOURCES_REQUEST = "GET_RESOURCES_REQUEST";
export const GET_RESOURCES_SUCCESS = "GET_RESOURCES_SUCCESS";
export const GET_RESOURCES_ERROR = "GET_RESOURCES_ERROR";

const getResourcesRequest = () => {
  return {
    type: GET_RESOURCES_REQUEST,
  };
};

export const getResourcesSuccess = (resources, s3Resources) => {
  return {
    type: GET_RESOURCES_SUCCESS,
    resources: resources,
    s3Resources: s3Resources,
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
    const s3Resources = await Storage.list("test/", {
      // level: "protected",
      contentType: "image/png",
    });
    console.log("getS3ActionsResponse", s3Resources);
    const response = await API.graphql(
      graphqlOperation(listResources, {
        limit: 20,
      })
    );
    const sortedResources = sortByDate(response.data.listResources.items);
    dispatch(getResourcesSuccess(sortedResources, s3Resources));
  } catch (error) {
    dispatch(getResourcesError());
    console.error("attemptGetResourcesError", error);
  }
};

export const getResourcesInjector = (dispatch) => {
  return () => attemptGetResources(dispatch);
};
