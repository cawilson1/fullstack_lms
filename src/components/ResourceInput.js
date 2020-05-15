import React, { useState } from "react";
import S3ResourceInput from "../components/S3ResourceInput";

const ResourceInput = ({ boundCreateResource, boundS3CreateResource }) => {
  // const [uuid, setUuid] = useState("");
  const [file, setFile] = useState("");

  // console.log("uuid");
  let instructorInput,
    dataInput,
    uuidInput,
    urlInput,
    urlTitleInput,
    urlDescriptionInput;

  return (
    <>
      <form
        style={styles.formStyle}
        onSubmit={(e) => {
          e.preventDefault();
          boundCreateResource &&
            boundCreateResource({
              instructor: instructorInput.value,
              data: dataInput.value,
              uuid: "",
              url: urlInput.value === "" ? null : urlInput.value,
              urlTitle: urlTitleInput.value === "" ? null : urlTitleInput.value,
              urlDescription:
                urlDescriptionInput.value === ""
                  ? null
                  : urlDescriptionInput.value,
            });
          boundS3CreateResource &&
            boundS3CreateResource({
              file: file,
            });
        }}
      >
        <h3>Resource Input Here</h3>
        <input
          id="instructor"
          type="text"
          placeholder="Input instructor"
          ref={(node) => (instructorInput = node)}
        />
        <textarea
          id="data"
          type="text"
          placeholder="Input data"
          ref={(node) => (dataInput = node)}
        ></textarea>
        <input
          id="uuid"
          type="text"
          placeholder="Input uuid"
          ref={(node) => (uuidInput = node)}
        />
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
