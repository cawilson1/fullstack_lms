import React, { useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

//pass whole object back up thru bound in container

const UpdateResource = ({
  resource,
  boundUpdateResource,
  isToggleUpdate,
  setIsToggleUpdate,
  isRender,
  setIsRender,
}) => {
  const classes = useStyles();

  let instructor, data, uuid, url, urlTitle, urlDescription;

  return (
    <div>
      <form
        style={styles.formStyle}
        onSubmit={async (e) => {
          e.preventDefault();
          boundUpdateResource &&
            (await boundUpdateResource({
              id: resource.id,
              instructor: instructor.value,
              data: data.value,
              uuid: uuid.value === "" ? resource.uuid : uuid.value,
              url: url.value === "" ? resource.url : url.value,
              urlTitle:
                urlTitle.value === "" ? resource.urlTitle : urlTitle.value,
              urlDescription:
                urlDescription.value === ""
                  ? resource.urlDescription
                  : urlDescription.value,
            }));
          await setIsToggleUpdate(!isToggleUpdate);
          await setIsRender(!isRender);
        }}
      >
        <input
          id="instructor"
          type="text"
          defaultValue={resource.instructor}
          ref={(node) => (instructor = node)}
          style={styles.inputs}
        />
        <label htmlFor="data">Body of Post:</label>
        <textarea
          id="data"
          type="text"
          defaultValue={resource.data}
          ref={(node) => (data = node)}
          style={styles.textarea}
        ></textarea>
        <label htmlFor="url">URL of Online Resource</label>
        <input
          id="url"
          type="text"
          defaultValue={resource.url}
          ref={(node) => (url = node)}
          style={styles.inputs}
        />
        <label htmlFor="urlTitle">Title of Online Resource:</label>
        <input
          id="urlTitle"
          type="text"
          defaultValue={resource.urlTitle}
          ref={(node) => (urlTitle = node)}
          style={styles.inputs}
        />
        <label htmlFor="urlDescription">Summary of Online Resource:</label>
        <input
          id="urlDescription"
          type="text"
          defaultValue={resource.urlDescription}
          ref={(node) => (urlDescription = node)}
          style={styles.inputs}
        />
        <input
          id="uuid"
          type="text"
          defaultValue={resource.uuid}
          ref={(node) => (uuid = node)}
        />
        <div style={styles.buttonWrapper}>
          <Button
            style={styles.button}
            size="small"
            variant="contained"
            color="primary"
            type="submit"
          >
            Submit Changes
          </Button>
          <Button
            style={styles.button}
            size="small"
            variant="contained"
            onClick={() => setIsToggleUpdate(!isToggleUpdate)}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UpdateResource;

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
  buttonWrapper: {
    display: "flex",
    flexDirection: "row",
  },
  buttons: {
    margin: "10px",
  },
};
