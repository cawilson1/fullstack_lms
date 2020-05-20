import React, { useEffect, useState } from "react";
import Resource from "./Resource";

const ResourceList = ({
  boundAttemptGetResources,
  boundAttemptGetS3Resources,
  boundUpdateResourceRequest,
  boundAttemptDeleteResource,
  boundAttemptDeleteS3Resource,
  resources,
  s3Resources,
}) => {
  useEffect(() => {
    async function fetch() {
      await boundAttemptGetS3Resources();
      await boundAttemptGetResources();
    }
    fetch();
  }, []);

  //subscription
  //

  return (
    <div>
      {resources.map((resource) => {
        return resource ? (
          <div key={resource.id}>
            <Resource
              resource={resource}
              s3Resources={s3Resources}
              boundAttemptDeleteResource={boundAttemptDeleteResource}
              boundUpdateResourceRequest={boundUpdateResourceRequest}
              boundAttemptDeleteS3Resource={boundAttemptDeleteS3Resource}
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
