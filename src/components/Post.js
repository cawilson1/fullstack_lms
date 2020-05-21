import React, { useState } from "react";
import UpdatePostContainer from "../containers/UpdatePostContainer";

const Post = ({ post, boundUpdatePost, boundAttemptDeletePost }) => {
  const [isToggleUpdate, setIsToggleUpdate] = useState(false);

  function adjustedDate(date) {
    let mm = date.slice(6, 7);
    let dd = date.slice(8, 10);
    let yy = date.slice(0, 4);
    let hr = (date.slice(11, 13) - 4) % 12;
    let min = date.slice(14, 16);
    if (hr === 0) {
      hr = 12;
    }
    return mm + "/" + dd + "/" + yy + " at " + hr + ":" + min;
  }

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
          <p>Created: {adjustedDate(post.createdAt)}</p>
          {post.createdAt == post.updatedAt ? (
            <></>
          ) : (
            <p>Updated: {adjustedDate(post.updatedAt)}</p>
          )}

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
