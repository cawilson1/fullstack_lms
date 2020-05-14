import React from "react";
// import { findByLabelText } from "@testing-library/react";

const ResourceInput = ({ boundCreateResource }) => {
  //local state for isChecked____ (type of checkbox)
  //ternary to swap between the three with varying fields visible/editable

  let instructorInput,
    dataInput,
    uuidInput,
    urlInput,
    urlTitleInput,
    urlDescriptionInput;

  return (
    <form
      style={styles.formStyle}
      onSubmit={(e) => {
        e.preventDefault();
        boundCreateResource &&
          boundCreateResource({
            instructor: instructorInput.value,
            data: dataInput.value,
            uuid: uuidInput.value === "" ? null : uuidInput.value,
            url: urlInput.value === "" ? null : urlInput.value,
            urlTitle: urlTitleInput.value === "" ? null : urlTitleInput.value,
            urlDescription:
              urlDescriptionInput.value === ""
                ? null
                : urlDescriptionInput.value,
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
      <button type="submit">Submit</button>
    </form>
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
