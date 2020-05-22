import React, { useState, useEffect } from "react";
import UpdateResourceContainer from "../containers/UpdateResourceContainer";
import { S3Image } from "aws-amplify-react";

const Resource = ({
  resource,
  boundAttemptDeleteResource,
  s3Resources,
  isRender,
  setIsRender,
}) => {
  const [isToggleUpdate, setIsToggleUpdate] = useState(false);
  const [hasS3Resource, setHasS3Resource] = useState(false);
  const [s3, setS3] = useState("");

  function adjustedDate(date) {
    let mm = date.slice(6, 7);
    let dd = date.slice(8, 10);
    let yy = date.slice(0, 4);
    let hr = (date.slice(11, 13) - 4) % 12;
    let min = date.slice(14, 16);
    if (hr === 0) {
      hr = 12;
    }
    return mm + "/" + dd + "/" + yy + " at " + hr + ":" + min;
  }

  useEffect(() => {
    const matchKey = (s3Resource) => {
      return s3Resource.key === "test/" + resource.uuid; //t or f
    };
    const matchedToS3 = s3Resources.filter(matchKey); //either empty [] or [{key}}
    if (matchedToS3[0]) {
      setHasS3Resource(true);
      setS3(matchedToS3[0].key);
    }
  }, []);

  return (
    <div>
      {isToggleUpdate ? (
        <UpdateResourceContainer
          isRender={isRender}
          setIsRender={setIsRender}
          resource={resource}
          setIsToggleUpdate={setIsToggleUpdate}
          isToggleUpdate={isToggleUpdate}
        />
      ) : (
        <div>
          <h4>Resource Start</h4>
          <p>{resource.instructor}</p>
          <p>{resource.data}</p>
          <p>Added {adjustedDate(resource.createdAt)}</p>
          {resource.createdAt == resource.updatedAt ? (
            <></>
          ) : (
            <p>Updated {adjustedDate(resource.updatedAt)}</p>
          )}
          <div>
            {hasS3Resource ? (
              <S3Image
                theme={{ photoImg: { width: 250, height: 200 } }}
                key={s3}
                imgKey={s3}
                level={"public"}
              />
            ) : (
              <></>
            )}
          </div>
          <button
            onClick={async () => {
              await boundAttemptDeleteResource(resource.id, s3);
              await setIsRender(!isRender);
            }}
          >
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
