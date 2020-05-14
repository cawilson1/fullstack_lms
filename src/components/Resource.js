import React from "react";

const Resource = ({ resource, boundAttemptDeleteResource }) => {
  // console.log(
  //   "resource component",
  //   resource,
  //   "instructor",
  //   resource.instructor
  // );
  return (
    <div>
      <h4>Resource Start</h4>
      <p>{resource.instructor}</p>
      <p>{resource.data}</p>
      <p>{resource.createdAt}</p>
      <button onClick={() => boundAttemptDeleteResource(resource.id)}>
        Delete Resource
      </button>
      <button> Update Resource </button>
      <p>-------</p>
    </div>
  );
};

export default Resource;
