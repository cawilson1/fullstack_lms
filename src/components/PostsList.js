import React, { useEffect, useState } from "react";
import Post from "./Post";

const PostsList = ({
  boundAttemptGetPosts,
  boundUpdatePost,
  boundAttemptDeletePost,
  posts,
}) => {
  const [isRender, setIsRender] = useState(false);

  useEffect(() => {
    boundAttemptGetPosts();
  }, [isRender]);

  return (
    <div>
      {posts.map((post) => {
        return post ? (
          <div key={post.id}>
            <Post
              post={post}
              boundUpdatePost={boundUpdatePost}
              boundAttemptDeletePost={boundAttemptDeletePost}
              isRender={isRender}
              setIsRender={setIsRender}
            />
          </div>
        ) : (
          "You haven't created any posts yet"
        );
      })}
    </div>
  );
};
export default PostsList;
