import { API, graphqlOperation } from "aws-amplify";
import { createPost } from "../graphql/mutations";

export const CREATE_POST_REQUEST = "CREATE_POST_REQUEST";
export const CREATE_POST_SUCCESS = "CREATE_POST_SUCCESS";
export const CREATE_POST_ERROR = "CREATE_POST_ERROR";

const createPostRequest = (post) => {
  return {
    type: CREATE_POST_REQUEST,
    post: post,
  };
};

const createPostSuccess = () => {
  return {
    type: CREATE_POST_SUCCESS,
  };
};

const createPostError = () => {
  return {
    type: CREATE_POST_ERROR,
  };
};

const attemptCreatePostRequest = async (dispatch, post) => {
  dispatch(createPostRequest(post));
  try {
    const response = await API.graphql(
      graphqlOperation(createPost, {
        input: post,
      })
    );
    dispatch(createPostSuccess());
  } catch (error) {
    dispatch(createPostError());
    console.error("Error Creating Post", error);
  }
};

export const createPostInjector = (dispatch) => {
  return (post) => attemptCreatePostRequest(dispatch, post);
};
