import { GET_POSTS_SUCCESS, GET_POSTS_ERROR } from "../actions/getPostActions";

export const getPostsReducer = (
  state = { posts: [], status: null },
  action
) => {
  switch (action.type) {
    case GET_POSTS_SUCCESS:
      return { ...state, posts: action.posts, status: action.type };
    case GET_POSTS_ERROR:
      return { ...state, posts: [], status: action.type };
    default:
      return { ...state };
  }
};
