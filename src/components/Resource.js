import React, { useState, useEffect } from "react";
import UpdateResourceContainer from "../containers/UpdateResourceContainer";
import { S3Image } from "aws-amplify-react";
import ResourcesListContainer from "../containers/ResourcesListContainer";

const Resource = ({
  resource,
  boundAttemptDeleteResource,
  s3Resource,
  boundAttemptGetS3Resources,
  s3Uuid,
}) => {
  const [isToggleUpdate, setIsToggleUpdate] = useState(false);
  // const [isLinkedS3, setIsLinkedS3] = useState("");

  // Does resource.uuid exist?
  //  If Y, execute boundAttemptGetS3Resources
  //     uuid should be available
  //  If N, skip
  useEffect(() => {
    if (resource.uuid !== "") {
      boundAttemptGetS3Resources(resource.uuid);
    }
  }, []);

  console.log("Smile You're a UUID", s3Uuid);

  return (
    <div>
      {isToggleUpdate ? (
        <UpdateResourceContainer
          resource={resource}
          setIsToggleUpdate={setIsToggleUpdate}
          isToggleUpdate={isToggleUpdate}
        />
      ) : (
        <div>
          <h4>Resource Start</h4>
          <p>{resource.instructor}</p>
          <p>{resource.data}</p>
          <p>{resource.createdAt}</p>
          <p>Image: {s3Uuid}</p>
          <button onClick={() => boundAttemptDeleteResource(resource.id)}>
            Delete Resource
          </button>
          <button onClick={() => setIsToggleUpdate(!isToggleUpdate)}>
            Update Resource{" "}
          </button>
          <p>-------</p>
        </div>
      )}
    </div>
  );
};
// ) : return (
//     <div>
//       <h4>Resource Start</h4>
//       <p>{resource.instructor}</p>
//       <p>{resource.data}</p>
//       <p>{resource.createdAt}</p>
//       <button onClick={() => boundAttemptDeleteResource(resource.id)}>
//         Delete Resource
//       </button>
//       <button
//         onClick={() => (
//         )}
//       >
//         Update Resource{" "}
//       </button>
//       <p>-------</p>
//     </div>
//   );

export default Resource;
