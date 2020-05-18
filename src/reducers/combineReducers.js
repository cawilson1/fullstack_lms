import { combineReducers } from "redux";

import { createResourceReducer } from "./createResourceReducer";
import { getResourcesReducer } from "./getResourceReducer";
import { deleteResourceReducer } from "./deleteResourceReducer";
import { updateResourceReducer } from "./updateResourceReducer";
import { createS3ResourceReducer } from "./createS3ResourceReducer";
import { getS3ResourceReducer } from "./getS3ResourceReducer";
import { createPostReducer } from "./createPostReducer";
import { getPostsReducer } from "./getPostsReducer";
import { updatePostReducer } from "./updatePostReducer";

export const rootReducer = combineReducers({
  createResourceReducer,
  getResourcesReducer,
  deleteResourceReducer,
  updateResourceReducer,
  createS3ResourceReducer,
  getS3ResourceReducer,
  createPostReducer,
  getPostsReducer,
  updatePostReducer,
});
