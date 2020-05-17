import React, { useEffect, useState } from "react";
import Resource from "./Resource";
import { Storage } from "aws-amplify";

// ----TO DO----
// [ ] GET Resource/Links from Dynamo
// [ ] GET images/docs from S3

const ResourceList = ({
  boundAttemptDeleteResource,
  boundAttemptGetResources,
  boundUpdateResourceRequest,
  boundAttemptGetS3Resources,
  resources,
  s3Resource,
  s3Uuid,
}) => {
  const [testS3, setTestS3] = useState("");

  useEffect(() => {
    boundAttemptGetResources();
    // let testS3get = Storage.get("test/a58e2778-ee88-4833-a6e9-df45d3a0669d.png")
    //   .then((result) => console.log("GetS3 Result", result))
    //   .catch((err) => console.log(err));
  }, []);

  // console.log("testS3 response", testS3);

  return (
    //if (status === UPDATE_RESOURCE_REQUEST) {
    // <UpdateResource />
    //}
    <div>
      <img src={testS3}></img>
      {resources.map((resource) => {
        return resource ? (
          <div key={resource.id}>
            <Resource
              resource={resource}
              s3Resource={s3Resource}
              s3Uuid={s3Uuid}
              boundAttemptDeleteResource={boundAttemptDeleteResource}
              boundUpdateResourceRequest={boundUpdateResourceRequest}
              boundAttemptGetS3Resources={boundAttemptGetS3Resources}
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
