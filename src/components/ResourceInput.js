import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { navigate } from "@reach/router";
import { Auth } from "aws-amplify";

import S3ResourceInput from "../components/S3ResourceInput";

const ResourceInput = ({ boundCreateResource, boundS3CreateResource }) => {
  const [file, setFile] = useState("");
  const [instructor, setInstructor] = useState("");

  useEffect(() => {
    const getInstructor = async () => {
      const fromAuth = await Auth.currentUserInfo();
      const gotInstructor = await fromAuth.username;
      setInstructor(gotInstructor);
    };
    getInstructor();
  }, []);

  const uuid = uuidv4() + ".png";

  let dataInput, urlInput, urlTitleInput, urlDescriptionInput;

  return (
    <>
      <form
        style={styles.formStyle}
        onSubmit={(e) => {
          e.preventDefault();
          boundCreateResource &&
            boundCreateResource({
              instructor: instructor,
              data: dataInput.value,
              uuid: file ? uuid : null,
              url: urlInput.value === "" ? null : urlInput.value,
              urlTitle: urlTitleInput.value === "" ? null : urlTitleInput.value,
              urlDescription:
                urlDescriptionInput.value === ""
                  ? null
                  : urlDescriptionInput.value,
            });
          if (file !== "") {
            boundS3CreateResource &&
              boundS3CreateResource({
                file: file,
                uuid: uuid,
              });
          }
          navigate("/");
        }}
      >
        <h3>Resource Input Here</h3>
        <textarea
          id="data"
          type="text"
          placeholder="Input data"
          ref={(node) => (dataInput = node)}
        ></textarea>
        <input
          id="url"
          type="text"
          placeholder="Input url"
          ref={(node) => (urlInput = node)}
        />
        <input
          id="urlTitle"
          type="text"
          placeholder="Input url title"
          ref={(node) => (urlTitleInput = node)}
        />
        <input
          id="urlDescription"
          type="text"
          placeholder="Input url description"
          ref={(node) => (urlDescriptionInput = node)}
        />
        <input type="checkbox"></input>
        <S3ResourceInput setFile={setFile} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default ResourceInput;

const styles = {
  formStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};
