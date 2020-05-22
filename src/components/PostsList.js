import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";

import Post from "./Post";
import {
  onCreatePost,
  onDeletePost,
  onUpdatePost,
} from "../graphql/subscriptions";

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

  useEffect(() => {
    const subscription = API.graphql(graphqlOperation(onCreatePost)).subscribe({
      next: (response) => {
        console.log("create subscription", response.value.data.onCreatePost);
        boundAttemptGetPosts();
      },
    });
    return () => subscription.unsubscribe();
  }, [posts]);

  useEffect(() => {
    const subscription = API.graphql(graphqlOperation(onUpdatePost)).subscribe({
      next: (response) => {
        console.log("Update subscription", response.value.data.onUpdatePost);
        boundAttemptGetPosts();
      },
    });
    return () => subscription.unsubscribe();
  }, [posts]);

  useEffect(() => {
    const subscription = API.graphql(graphqlOperation(onDeletePost)).subscribe({
      next: (response) => {
        console.log("Delete subscription", response.value.data.onDeletePost);
        boundAttemptGetPosts();
      },
    });
    return () => subscription.unsubscribe();
  }, [posts]);

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
