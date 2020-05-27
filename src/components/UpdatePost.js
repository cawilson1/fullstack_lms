import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

const UpdatePost = ({
  boundUpdatePost,
  setIsToggleUpdate,
  isToggleUpdate,
  post,
  isRender,
  setIsRender,
}) => {
  const classes = useStyles();

  let data;

  return (
    <div>
      <form
        style={styles.postLayout}
        onSubmit={async (e) => {
          e.preventDefault();
          boundUpdatePost &&
            (await boundUpdatePost({
              id: post.id,
              author: post.author,
              data: data.value,
            }));
          await setIsToggleUpdate(!isToggleUpdate);
          await setIsRender(!isRender);
        }}
      >
        <textarea
          id="data"
          type="text"
          defaultValue={post.data}
          style={styles.textarea}
          ref={(node) => (data = node)}
        ></textarea>
        <div style={styles.buttonWrapper}>
          <Button
            style={styles.button}
            size="small"
            variant="contained"
            color="primary"
            type="submit"
          >
            Submit Changes
          </Button>
          <Button
            style={styles.button}
            size="small"
            variant="contained"
            onClick={() => setIsToggleUpdate(!isToggleUpdate)}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePost;

const styles = {
  postLayout: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textarea: {
    width: 250,
    margin: 20,
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 4,
    border: "1px solid black",
    boxShadow: "inset 0px 0px 1.5px 1.5px gray",
    padding: 10,
    fontFamily: "sans-serif",
  },
  buttonWrapper: {
    display: "flex",
    flexDirection: "row",
  },
  buttons: {
    margin: "10px",
  },
};
