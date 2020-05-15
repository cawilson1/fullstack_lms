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

  let instructor, data, uuid, url, urlTitle, urlDescription;

  //subscription to handle render updated

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          boundUpdateResource &&
            boundUpdateResource({
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
            });
          setIsToggleUpdate(!isToggleUpdate);
        }}
      >
        <Typography className={classes.typography}>
          <input
            id="instructor"
            type="text"
            defaultValue={resource.instructor}
            ref={(node) => (instructor = node)}
          />
          <textarea
            id="data"
            type="text"
            defaultValue={resource.data}
            ref={(node) => (data = node)}
          ></textarea>
          <input
            id="uuid"
            type="text"
            defaultValue={resource.uuid}
            ref={(node) => (uuid = node)}
          />
          <input
            id="url"
            type="text"
            defaultValue={resource.url}
            ref={(node) => (url = node)}
          />
          <input
            id="urlTitle"
            type="text"
            defaultValue={resource.urlTitle}
            ref={(node) => (urlTitle = node)}
          />
          <input
            id="urlDescription"
            type="text"
            defaultValue={resource.urlDescription}
            ref={(node) => (urlDescription = node)}
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
