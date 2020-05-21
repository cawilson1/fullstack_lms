import { API, graphqlOperation } from "aws-amplify";
import { updatePost } from "../graphql/mutations";

export const UPDATE_POST_SUCCESS = "UPDATE_POST_SUCCESS";
export const UPDATE_POST_ERROR = "UPDATE_POST_ERROR";
export const UPDATE_POST_REQUEST = "UPDATE_POST_REQUEST";

export const updatePostRequest = (modifiedPost) => {
  return {
    type: UPDATE_POST_REQUEST,
    modifiedPost,
  };
};

const updatePostSuccess = () => {
  return {
    type: UPDATE_POST_SUCCESS,
  };
};

const updatePostError = () => {
  return {
    type: UPDATE_POST_ERROR,
  };
};

const attemptUpdatePost = async (dispatch, modifiedPost) => {
  dispatch(updatePostRequest());
  try {
    await API.graphql(
      graphqlOperation(updatePost, {
        input: modifiedPost,
      })
    );
    dispatch(updatePostSuccess());
  } catch (error) {
    dispatch(updatePostError());
    console.log("AttemptUpdatePostERR", error);
  }
};

export const updatePostInjector = (dispatch) => {
  return (modifiedPost) => attemptUpdatePost(dispatch, modifiedPost);
};
