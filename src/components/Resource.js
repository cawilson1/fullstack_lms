import React, { useState } from "react";
import UpdateResourceContainer from "../containers/UpdateResourceContainer";

const Resource = ({ resource, boundAttemptDeleteResource }) => {
  const [isToggleUpdate, setIsToggleUpdate] = useState(false);
  console.log("RESOURCE HERE", resource);
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
          {console.log("Resource instructor", resource.instructor)}
          <p>{resource.instructor}</p>
          <p>{resource.data}</p>
          <p>{resource.createdAt}</p>
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
