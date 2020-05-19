import { API, graphqlOperation } from "aws-amplify";
import { createResource } from "../graphql/mutations";
import { onCreateResource } from "../graphql/subscriptions";

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
    // const subscription = await subscribeCreate();
    const request = await API.graphql(
      graphqlOperation(createResource, {
        input: resource,
      })
    );
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

//subscription function - revisit (not getting to response console.log)
async function subscribeCreate() {
  try {
    const subscription = await API.graphql(
      graphqlOperation(onCreateResource)
    ).subscribe({
      next: (response) => {
        console.log("Subscription response", response);
      },
    });
    return subscription;
  } catch (error) {
    console.error(error);
  }
}
