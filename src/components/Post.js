import React, { useState } from "react";
import UpdatePostContainer from "../containers/UpdatePostContainer";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

const Post = ({
  post,
  boundUpdatePost,
  boundAttemptDeletePost,
  isRender,
  setIsRender,
}) => {
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
          isRender={isRender}
          setIsRender={setIsRender}
        />
      ) : (
        <div style={styles.postLayout}>
          <h4>Start of Post by {post.author}</h4>
          <p>Created: {adjustedDate(post.createdAt)}</p>
          {post.createdAt === post.updatedAt ? (
            <></>
          ) : (
            <p>Updated: {adjustedDate(post.updatedAt)}</p>
          )}

          <p>{post.data}</p>
          <div style={styles.buttonWrapper}>
            <Button
              size="small"
              style={styles.buttons}
              variant="contained"
              color="primary"
              onClick={() => {
                setIsToggleUpdate(!isToggleUpdate);
              }}
            >
              Update Post
            </Button>
            <Button
              style={styles.buttons}
              variant="contained"
              color="secondary"
              onClick={async () => {
                await boundAttemptDeletePost(post.id);
                await setIsRender(!isRender);
              }}
            >
              Delete Post
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;

const styles = {
  postLayout: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "left",
  },
  buttonWrapper: {
    display: "flex",
    flexDirection: "row",
  },
  buttons: {
    margin: "10px",
    secondary: "red",
  },
};
