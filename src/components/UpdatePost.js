import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
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
}) => {
  const classes = useStyles();

  let author, data;
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          boundUpdatePost &&
            boundUpdatePost({
              id: post.id,
              author: author.value,
              data: data.value,
            });
          setIsToggleUpdate(!isToggleUpdate);
        }}
      >
        <Typography className={classes.typography}>
          <input
            id="author"
            type="text"
            defaultValue={post.author}
            ref={(node) => (author = node)}
          />
          <textarea
            id="data"
            type="text"
            defaultValue={post.data}
            ref={(node) => (data = node)}
          ></textarea>
          <Button
            // aria-describedby={id}
            variant="contained"
            color="primary"
            type="submit"
          >
            Submit Changes
          </Button>
        </Typography>
      </form>
    </div>
  );
};

export default UpdatePost;
