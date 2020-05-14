import {
  UPDATE_RESOURCE_ERROR,
  UPDATE_RESOURCE_SUCCESS,
  UPDATE_RESOURCE_REQUEST,
} from "../actions/updateResourceActions";

const initialState = {
  instructor: "",
  data: "",
  uuid: null,
  url: null,
  urlDescription: null,
  urlTitle: null,
  status: null,
};

export const updateResourceReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_RESOURCE_REQUEST:
      return {
        ...state,
        instructor: action.instructor,
        data: action.data,
        uuid: action.uuid,
        url: action.url,
        urlDescription: action.urlDescription,
        urlTitle: action.urlTitle,
        status: action.type,
      };
    case UPDATE_RESOURCE_SUCCESS:
      return {
        ...state,
        instructor: "",
        data: "",
        uuid: null,
        url: null,
        urlDescription: null,
        urlTitle: null,
        status: action.type,
      };
    case UPDATE_RESOURCE_ERROR:
      return {
        ...state,
        instructor: "",
        data: "",
        uuid: null,
        url: null,
        urlDescription: null,
        urlTitle: null,
        status: action.type,
      };
    default:
      return { ...state };
  }
};
