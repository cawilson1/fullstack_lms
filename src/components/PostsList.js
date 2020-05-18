import React, { useEffect } from "react";
import Post from "./Post";

const PostsList = ({
  boundAttemptGetPosts,
  boundUpdatePost,
  boundAttemptDeletePost,
  posts,
}) => {
  console.log("From PostsList Component", posts);

  useEffect(() => {
    boundAttemptGetPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => {
        return post ? (
          <div key={post.id}>
            <Post
              post={post}
              boundUpdatePost={boundUpdatePost}
              boundAttemptDeletePost={boundAttemptDeletePost}
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
