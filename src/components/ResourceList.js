import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";

import {
  onCreateResource,
  onUpdateResource,
  onDeleteResource,
} from "../graphql/subscriptions";
import Resource from "./Resource";

const ResourceList = ({
  boundAttemptGetResources,
  boundUpdateResourceRequest,
  boundAttemptDeleteResource,
  resources,
  s3Resources,
}) => {
  const [isRender, setIsRender] = useState(false);

  console.log("Resources, maybe we can see sort", resources);

  useEffect(() => {
    boundAttemptGetResources();
  }, []);

  useEffect(() => {
    const subscription = API.graphql(
      graphqlOperation(onCreateResource)
    ).subscribe({
      next: (response) => {
        console.log(
          "Subscription response",
          response.value.data.onCreateResource
        );
        boundAttemptGetResources();
      },
    });
    return () => subscription.unsubscribe();
  }, [resources]);

  useEffect(() => {
    const subscription = API.graphql(
      graphqlOperation(onUpdateResource)
    ).subscribe({
      next: (response) => {
        console.log(
          "Update subscription rec'd",
          response.value.data.onUpdateResource
        );
        boundAttemptGetResources();
      },
    });
    return () => subscription.unsubscribe();
  }, [resources]);

  useEffect(() => {
    const subscription = API.graphql(
      graphqlOperation(onDeleteResource)
    ).subscribe({
      next: (response) => {
        console.log(
          "Update subscription rec'd",
          response.value.data.onDeleteResource
        );
        boundAttemptGetResources();
      },
    });
    return () => subscription.unsubscribe();
  }, [resources]);

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
              boundAttemptGetResources={boundAttemptGetResources}
              isRender={isRender}
              setIsRender={setIsRender}
              resources={resources}
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
