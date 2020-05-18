import { API, graphqlOperation } from "aws-amplify";
import { deletePost } from "../graphql/mutations";

export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS";
export const DELETE_POST_ERROR = "DELETE_POST_ERROR";
export const DELETE_POST_REQUEST = "DELETE_POST_REQUEST";

const deletePostRequest = (id) => {
  return {
    type: DELETE_POST_REQUEST,
    id,
  };
};

const deletePostSuccess = () => {
  return {
    type: DELETE_POST_SUCCESS,
  };
};

const deletePostError = () => {
  return {
    type: DELETE_POST_ERROR,
  };
};

const attemptPostResource = async (dispatch, id) => {
  dispatch(deletePostRequest(id));
  try {
    const request = await API.graphql(
      graphqlOperation(deletePost, {
        input: { id: id },
      })
    );
    dispatch(deletePostSuccess());
  } catch (error) {
    dispatch(deletePostError());
    console.error("AttemptDeletePostERR", error);
  }
};

export const deletePostInjector = (dispatch) => {
  return (id) => attemptPostResource(dispatch, id);
};
