import { connect } from "react-redux";
import { createPostInjector } from "../actions/createPostActions";
import PostInput from "../components/PostInput";

const mapDispatchToProps = (dispatch) => {
  return {
    boundCreatePost: createPostInjector(dispatch),
  };
};

const PostInputContainer = connect(null, mapDispatchToProps)(PostInput);

export default PostInputContainer;
