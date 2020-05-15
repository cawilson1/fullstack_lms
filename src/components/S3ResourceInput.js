import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const S3ResourceInput = ({ setFile }) => {
  //   const createUuid = () => {
  //     const uuid = uuidv4();
  //     console.log("uuid", uuid)
  //     return uuid;
  //   };

  return (
    <input
      type="file"
      accept="image/*, .pdf, .txt, .doc, .docx, .json"
      id="s3-resource"
      onChange={(e) => setFile(e.target.files[0])}
    />
  );
};

export default S3ResourceInput;
