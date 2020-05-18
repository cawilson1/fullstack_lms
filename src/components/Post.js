import React from "react";

const Post = ({ post }) => {
  console.log("Post - Bananas", post);

  return (
    <>
      <h3>A Post By {post.author}</h3>
      <p>{post.data}</p>
      <p>-------------</p>
    </>
  );
};

export default Post;
