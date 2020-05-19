import React, { useState } from "react";

const PostInput = ({ boundCreatePost }) => {
  // for S3 uploads - const [file, setFile] = useState("");
  let authorInput, dataInput;
  return (
    <>
      <form
        style={styles.formStyle}
        onSubmit={(e) => {
          e.preventDefault();
          boundCreatePost &&
            boundCreatePost({
              author: authorInput.value,
              data: dataInput.value,
              uuid: null,
            });
          // boundS3createpost goes here?
        }}
      >
        <h3>Post Input Here</h3>
        <input
          id="author"
          type="text"
          placeholder="Input author"
          ref={(node) => (authorInput = node)}
        />
        <textarea
          id="data"
          type="text"
          placeholder="Input data"
          ref={(node) => (dataInput = node)}
        ></textarea>
        <button type="submit">Submit Post</button>
      </form>
    </>
  );
};

export default PostInput;

const styles = {
  formStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};
