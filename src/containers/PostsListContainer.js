import { connect } from "react-redux";

import { getPostsInjector } from "../actions/getPostActions";
import { deletePostInjector } from "../actions/deletePostActions";

import PostsList from "../components/PostsList";

const mapStateToProps = (state) => {
  return {
    posts: state.getPostsReducer.posts,
    status: state.getPostsReducer.status,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    boundAttemptGetPosts: getPostsInjector(dispatch),
    boundAttemptDeletePost: deletePostInjector(dispatch),
  };
};

const PostsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsList);

export default PostsListContainer;
