import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const S3ResourceInput = ({ boundS3CreateResource }) => {
  //   const createUuid = () => {
  //     const uuid = uuidv4();
  //     console.log("uuid", uuid)
  //     return uuid;
  //   };

  let file;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        boundS3CreateResource &&
          boundS3CreateResource({
            file: file.value,
          });
      }}
    >
      <input type="file" id="s3-resource" ref={(node) => (file = node)} />
      <button type="submit">upload file to S3 Bucket</button>
    </form>
  );
};

export default S3ResourceInput;
