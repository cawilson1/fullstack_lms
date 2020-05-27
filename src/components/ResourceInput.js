import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import Button from "@material-ui/core/Button";

const ResourceInput = ({ boundCreateResource, boundS3CreateResource }) => {
  const [file, setFile] = useState("");
  const [instructor, setInstructor] = useState("");
  const [boxChecked, setBoxChecked] = useState("");

  useEffect(() => {
    const getInstructor = async () => {
      const fromAuth = await Auth.currentUserInfo();
      const gotInstructor = await fromAuth.username;
      setInstructor(gotInstructor);
    };
    getInstructor();
  }, []);

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
              file: file ? file : "", //mountains.jpg
              // uuid: file ? uuid : null, //0492073gjdi38yg29385 + .extension, then upload to S3/associate w Dynamo
              url: urlInput.value === "" ? null : urlInput.value,
              urlTitle: urlTitleInput.value === "" ? null : urlTitleInput.value,
              urlDescription:
                urlDescriptionInput.value === ""
                  ? null
                  : urlDescriptionInput.value,
            });
        }}
      >
        <h4>Add a Resource for Students</h4>
        <label htmlFor="data">Body of Post:</label>
        <textarea
          id="data"
          type="text"
          placeholder="Input data"
          ref={(node) => (dataInput = node)}
          style={styles.textarea}
        ></textarea>
        <label htmlFor="url">URL of Online Resource</label>
        <input
          id="url"
          type="text"
          placeholder="Input url"
          ref={(node) => (urlInput = node)}
          style={styles.inputs}
        />
        <label htmlFor="urlTitle">Title of Online Resource:</label>

        <input
          id="urlTitle"
          type="text"
          placeholder="Input url title"
          ref={(node) => (urlTitleInput = node)}
          style={styles.inputs}
        />
        <label htmlFor="urlDescription">Summary of Online Resource:</label>

        <input
          id="urlDescription"
          type="text"
          placeholder="Input url description"
          ref={(node) => (urlDescriptionInput = node)}
          style={styles.inputs}
        />

        <input
          type="file"
          accept="image/*, .pdf, .txt, .doc, .docx, .json"
          id="s3-resource"
          onChange={(e) => setFile(e.target.files[0])}
          style={styles.inputs}
        />
        <Button size="small" variant="contained" color="primary" type="submit">
          Submit Resource
        </Button>
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
  inputs: {
    width: 250,
    marginBottom: 10,
    marginTop: 4,
    borderRadius: 8,
    border: "1px solid black",
    boxShadow: "inset 0px 0px 1.5px 1.5px gray",
    padding: 10,
    fontFamily: "sans-serif",
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
};
