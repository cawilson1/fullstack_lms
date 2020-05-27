import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { navigate } from "@reach/router";
import Button from "@material-ui/core/Button";

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
          navigate("/post_list");
        }}
      >
        <h3>Start Writing Your Post:</h3>
        <textarea
          id="data"
          type="text"
          placeholder="Input data"
          ref={(node) => (dataInput = node)}
          style={styles.textarea}
        ></textarea>
        <Button size="small" variant="contained" color="primary" type="submit">
          Submit Post
        </Button>
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
  textarea: {
    width: 400,
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
};
