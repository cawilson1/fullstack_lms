const ADD_RESOURCE = "ADD_RESOURCE";
const SHOW_RESOURCES = "SHOW_RESOURCES";
const GET_RESOURCES_REQUEST = "GET_RESOURCES_REQUEST";
const GET_RESOURCES_SUCCESS = "GET_RESOURCES_SUCCESS";
const GET_RESOURCES_ERROR = "GET_RESOURCES_ERROR";

// const addResource = (resource) => {
//   return {
//     type: ADD_RESOURCE,
//     resource,
//   };
// };

const showResources = (resource) => {
  return {
    type: SHOW_RESOURCES,
    resource: resource,
  };
};

const getResources = (id) => {
  return {
    type: GET_RESOURCES,
    id,
  };
};
