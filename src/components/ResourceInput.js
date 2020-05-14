import React from "react";
// import { findByLabelText } from "@testing-library/react";

const ResourceInput = ({
  boundCreateResource,
  instructor,
  data,
  uuid,
  url,
  urlTitle,
  urlDescription,
  status,
}) => {
  //local state for isChecked____ (type of checkbox)
  //ternary to swap between the three with varying fields visible/editable

  return (
    <form
      style={styles.formStyle}
      onSubmit={(e) => {
        e.preventDefault();
        boundCreateResource &&
          boundCreateResource({
            instructor: instructor.value,
            data: data.value,
            uuid: uuid.value === "" ? null : uuid.value,
            url: url.value === "" ? null : url.value,
            urlTitle: urlTitle.value === "" ? null : urlTitle.value,
            urlDescription:
              urlDescription.value === "" ? null : urlDescription.value,
          });
      }}
    >
      <h3>Resource Input Here</h3>
      <input
        id="instructor"
        type="text"
        placeholder="Input instructor"
        ref={(node) => (instructor = node)}
      />
      <textarea
        id="data"
        type="text"
        placeholder="Input data"
        ref={(node) => (data = node)}
      ></textarea>
      <input
        id="uuid"
        type="text"
        placeholder="Input uuid"
        ref={(node) => (uuid = node)}
      />
      <input
        id="url"
        type="text"
        placeholder="Input url"
        ref={(node) => (url = node)}
      />
      <input
        id="urlTitle"
        type="text"
        placeholder="Input url title"
        ref={(node) => (urlTitle = node)}
      />
      <input
        id="urlDescription"
        type="text"
        placeholder="Input url description"
        ref={(node) => (urlDescription = node)}
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
