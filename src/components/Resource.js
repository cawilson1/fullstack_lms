import React, { useState, useEffect } from "react";
import UpdateResourceContainer from "../containers/UpdateResourceContainer";
import { S3Image } from "aws-amplify-react";
import ResourcesListContainer from "../containers/ResourcesListContainer";

const Resource = ({ resource, boundAttemptDeleteResource, s3Resource }) => {
  const [isToggleUpdate, setIsToggleUpdate] = useState(false);

  const matchKey = (s3Resource) => {
    return s3Resource.key === "test/" + resource.uuid;
  };

  const matchedTheKeys = s3Resource.filter(matchKey);

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
          <div>
            {matchedTheKeys[0] ? (
              <S3Image
                theme={{ photoImg: { width: 250, height: 200 } }}
                key={matchedTheKeys[0].key}
                imgKey={matchedTheKeys[0].key}
                level={"public"}
              />
            ) : (
              <></>
            )}
          </div>
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
export default Resource;
