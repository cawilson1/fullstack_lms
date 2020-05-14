import React, { useEffect } from "react";
import Resource from "./Resource";

// ----TO DO----
// [ ] GET Resource/Links from Dynamo
// [ ] GET images/docs from S3

const ResourceList = ({
  boundAttemptDeleteResource,
  boundAttemptGetResources,
  resources,
  status,
}) => {
  useEffect(() => {
    boundAttemptGetResources();
  }, []);
  return (
    <div>
      {resources.map((resource) => {
        // console.log("resources", resources, "instructor", resource.instructor);
        return resource ? (
          <div key={resource.id}>
            <Resource
              resource={resource}
              boundAttemptDeleteResource={boundAttemptDeleteResource}
            />
          </div>
        ) : (
          "You haven't posted any resources, yet."
        );
      })}
    </div>
  );
};

export default ResourceList;
