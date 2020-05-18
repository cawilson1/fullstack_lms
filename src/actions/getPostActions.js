import { API, graphqlOperation } from "aws-amplify";
import { listPosts } from "../graphql/queries";

export const GET_POSTS_REQUEST = "GET_POSTS_REQUEST";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_ERROR = "GET_POSTS_ERROR";

const getPostsRequest = () => {
  return {
    type: GET_POSTS_REQUEST,
  };
};

const getPostsSuccess = (response) => {
  return {
    type: GET_POSTS_SUCCESS,
    posts: response,
  };
};

const getPostsError = () => {
  return {
    type: GET_POSTS_ERROR,
  };
};

const attemptGetPosts = async (dispatch) => {
  dispatch(getPostsRequest());
  try {
    const response = await API.graphql(graphqlOperation(listPosts));
    response.data && dispatch(getPostsSuccess(response.data.listPosts.items));
    // console.log("Get Posts Success", response.data.listPosts.items);
  } catch (error) {
    dispatch(getPostsError());
    console.error("Get Posts ERR", error);
  }
};

export const getPostsInjector = (dispatch) => {
  return () => attemptGetPosts(dispatch);
};
