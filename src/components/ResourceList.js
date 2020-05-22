import React, { useEffect, useState } from "react";
import Resource from "./Resource";

const ResourceList = ({
  boundAttemptGetResources,
  boundUpdateResourceRequest,
  boundAttemptDeleteResource,
  resources,
  s3Resources,
}) => {
  const [isRender, setIsRender] = useState(false);

  useEffect(() => {
    boundAttemptGetResources();
  }, [isRender]);

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
              isRender={isRender}
              setIsRender={setIsRender}
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
