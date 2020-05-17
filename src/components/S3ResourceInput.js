import React from "react";

const S3ResourceInput = ({ setFile }) => {
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
