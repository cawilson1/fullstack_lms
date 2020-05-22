import {
  CREATE_RESOURCE_REQUEST,
  CREATE_RESOURCE_SUCCESS,
  CREATE_RESOURCE_ERROR,
} from "../actions/createResourceActions";

const initialState = {
  instructor: "",
  data: "",
  file: "",
  url: null,
  urlDescription: null,
  urlTitle: null,
  status: null,
};

export const createResourceReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_RESOURCE_REQUEST:
      return {
        ...state,
        instructor: action.instructor,
        data: action.data,
        file: action.file ? action.file : "",
        url: action.url,
        urlDescription: action.urlDescription,
        urlTitle: action.urlTitle,
        status: action.type,
      };
    case CREATE_RESOURCE_SUCCESS:
      return {
        ...state,
        status: action.type,
      };
    case CREATE_RESOURCE_ERROR:
      return {
        ...state,
        instructor: "",
        data: "",
        file: "",
        url: null,
        urlDescription: null,
        urlTitle: null,
        status: action.type,
      };
    default:
      return { ...state };
  }
};
