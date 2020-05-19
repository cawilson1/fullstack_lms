import React, { useState } from "react";
import UpdatePostContainer from "../containers/UpdatePostContainer";

const Post = ({ post, boundUpdatePost, boundAttemptDeletePost }) => {
  const [isToggleUpdate, setIsToggleUpdate] = useState(false);
  console.log("Post - Bananas", post);

  return (
    <div>
      {isToggleUpdate ? (
        <UpdatePostContainer
          post={post}
          setIsToggleUpdate={setIsToggleUpdate}
          isToggleUpdate={isToggleUpdate}
          boundUpdatePost={boundUpdatePost}
        />
      ) : (
        <div>
          <h4>Start of Post by {post.author}</h4>
          <p>{post.data}</p>
          <button onClick={() => boundAttemptDeletePost(post.id)}>
            Delete Post
          </button>
          <button onClick={() => setIsToggleUpdate(!isToggleUpdate)}>
            Update Post
          </button>
          <p>-------</p>
        </div>
      )}
    </div>
  );
};

export default Post;
