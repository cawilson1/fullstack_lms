import React from "react";

const Resource = ({ resource }) => {
  console.log(
    "resource component",
    resource,
    "instructor",
    resource.instructor
  );
  return (
    <div>
      <p>{resource.instructor}</p>
      <p>{resource.data}</p>
      <p>{resource.createdAt}</p>
    </div>
  );
};

export default Resource;
