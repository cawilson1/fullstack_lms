import { API, graphqlOperation } from "aws-amplify";
import { createResource } from "../graphql/mutations";

const CREATE_RESOURCE_SUCCESS = "CREATE_RESOURCE_SUCCESS";
const CREATE_RESOURCE_ERROR = "CREATE_RESOURCE_ERROR";
const CREATE_RESOURCE_REQUEST = "CREATE_RESOURCE_REQUEST";

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

// useEffect(() => {
//   const testCreate = async () => {
//     const request = await API.graphql(
//       graphqlOperation(createResource, {
//         input: { instructor: "Casey" },
//       })
//     );
//     console.log(request);
//   };
//   testCreate();
// }, []);

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
