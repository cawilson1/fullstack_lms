import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";

const PostInput = ({ boundCreatePost }) => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const getUsername = async () => {
      const useAuth = await Auth.currentUserInfo();
      const gotUser = await useAuth.username;
      setUsername(gotUser);
    };
    getUsername();
  }, []);

  let dataInput;

  return (
    <>
      <form
        style={styles.formStyle}
        onSubmit={(e) => {
          e.preventDefault();
          boundCreatePost &&
            boundCreatePost({
              author: username,
              data: dataInput.value,
              uuid: null,
            });
        }}
      >
        <h3>Post Input Here</h3>
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
