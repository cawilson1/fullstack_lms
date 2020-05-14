import React from "react";

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
}) => {
  const classes = useStyles();

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          boundUpdateResource({
            id: resource.id,
            instructor: resource.instructor.value,
            data: resource.data.value,
            uuid:
              resource.uuid.value === "" ? resource.uuid : resource.uuid.value,
            url: resource.url.value === "" ? resource.url : resource.url.value,
            urlTitle:
              resource.urlTitle.value === ""
                ? resource.urlTitle
                : resource.urlTitle.value,
            urlDescription:
              resource.urlDescription.value === ""
                ? resource.urlDescription
                : resource.urlDescription.value,
          });
          //   setIsToggleUpdate(!isToggleUpdate);
        }}
      >
        <Typography className={classes.typography}>
          <input
            id="instructor"
            type="text"
            defaultValue={resource.instructor}
            ref={(node) => (resource.instructor = node)}
          />
          <textarea
            id="data"
            type="text"
            defaultValue={resource.data}
            ref={(node) => (resource.data = node)}
          ></textarea>
          <input
            id="uuid"
            type="text"
            defaultValue={resource.uuid}
            ref={(node) => (resource.uuid = node)}
          />
          <input
            id="url"
            type="text"
            defaultValue={resource.url}
            ref={(node) => (resource.url = node)}
          />
          <input
            id="urlTitle"
            type="text"
            defaultValue={resource.urlTitle}
            ref={(node) => (resource.urlTitle = node)}
          />
          <input
            id="urlDescription"
            type="text"
            defaultValue={resource.urlDescription}
            ref={(node) => (resource.urlDescription = node)}
          />
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

export default UpdateResource;
