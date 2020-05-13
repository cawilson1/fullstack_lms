import {
  CREATE_RESOURCE_SUCCESS,
  CREATE_RESOURCE_ERROR,
} from "../actions/createResourceActions";

const initialState = {
  instructor: "",
  data: "",
  date: "",
  uuid: "",
  url: "",
  urlDescription: "",
  urlTitle: "",
  status: null,
};

export const createResourceReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_RESOURCE_SUCCESS:
      return {
        ...state,
        instructor: action.instructor,
        data: action.data,
        date: action.date,
        uuid: action.uuid,
        url: action.url,
        urlDescription: action.urlDescription,
        urlTitle: action.urlTitle,
        status: action.type,
      };
    case CREATE_RESOURCE_ERROR:
      return {
        ...state,
        instructor: "",
        data: "",
        date: "",
        uuid: "",
        url: "",
        urlDescription: "",
        urlTitle: "",
        status: action.type,
      };
    default:
      return { ...state };
  }
};
