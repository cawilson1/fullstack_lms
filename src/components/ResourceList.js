import React, { useEffect, useState } from "react";
import Resource from "./Resource";
import { Storage } from "aws-amplify";

const ResourceList = ({
  boundAttemptDeleteResource,
  boundAttemptGetResources,
  boundUpdateResourceRequest,
  boundAttemptGetS3Resources,
  resources,
  s3Resource,
}) => {
  useEffect(() => {
    async function fetch() {
      const alpha = await boundAttemptGetS3Resources();
      const beta = await boundAttemptGetResources();
    }
    fetch();
  }, []);

  return (
    //if (status === UPDATE_RESOURCE_REQUEST) {
    // <UpdateResource />
    //}
    <div>
      {resources.map((resource) => {
        return resource ? (
          <div key={resource.id}>
            <Resource
              resource={resource}
              s3Resource={s3Resource}
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
