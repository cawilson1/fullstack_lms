import { API, graphqlOperation } from "aws-amplify";
import { Storage } from "aws-amplify";
import { v4 as uuidv4 } from "uuid";
import { navigate } from "@reach/router";

import { createResource } from "../graphql/mutations";

export const CREATE_RESOURCE_SUCCESS = "CREATE_RESOURCE_SUCCESS";
export const CREATE_RESOURCE_ERROR = "CREATE_RESOURCE_ERROR";
export const CREATE_RESOURCE_REQUEST = "CREATE_RESOURCE_REQUEST";

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
    let imageResponse = "";
    if (resource.file !== "") {
      let fileExt = resource.file.name.split(".")[1];
      let uuid = uuidv4() + "." + fileExt;
      // "image/*, .pdf, .txt, .doc, .docx, .json"
      imageResponse = await Storage.put("test/" + uuid, resource.file, {
        contentType: "image/png",
        //file ext would be blown out here
      });
    }
    //need file and fileExt left out of GraphQl
    let dbResource = {
      instructor: resource.instructor,
      data: resource.data,
      uuid: imageResponse === "" ? "" : imageResponse.key.split("/")[1],
      url: resource.url,
      urlDescription: resource.urlDescription,
      urlTitle: resource.urlTitle,
    };
    API.graphql(
      graphqlOperation(createResource, {
        input: dbResource,
      })
    ).then((response) => {
      dispatch(createResourceSuccess());
      navigate("resource_list");
    });
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
