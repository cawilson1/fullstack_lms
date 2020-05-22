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
  isRender,
  setIsRender,
}) => {
  const classes = useStyles();

  console.log("Post, what's here?", post);

  let data;
  // let author,
  return (
    <div>
      <form
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
        <Typography className={classes.typography}>
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
