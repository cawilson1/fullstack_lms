import React, { useEffect } from "react";
import Resource from "./Resource";

// ----TO DO----
// [ ] GET Resource/Links from Dynamo
// [ ] GET images/docs from S3

const ResourceList = ({
  boundAttemptDeleteResource,
  boundAttemptGetResources,
  boundUpdateResourceRequest,
  resources,
  status,
}) => {
  useEffect(() => {
    boundAttemptGetResources();
  }, []);

  return (
    //if (status === UPDATE_RESOURCE_REQUEST) {
    // <UpdateResource />
    //}
    <div>
      {resources.map((resource) => {
        // console.log("resources", resources, "instructor", resource.instructor);
        return resource ? (
          <div key={resource.id}>
            <Resource
              resource={resource}
              boundAttemptDeleteResource={boundAttemptDeleteResource}
              boundUpdateResourceRequest={boundUpdateResourceRequest}
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
