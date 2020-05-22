import { combineReducers } from "redux";

import { createResourceReducer } from "./createResourceReducer";
import { createUserProfileReducer } from "./createUserProfileReducer";
import { createPostReducer } from "./createPostReducer";

import { deleteResourceReducer } from "./deleteResourceReducer";
import { deletePostReducer } from "./deletePostReducer";

import { getResourcesReducer } from "./getResourceReducer";
import { getPostsReducer } from "./getPostsReducer";
import { getUserProfileReducer } from "./getUserProfileReducer";

import { updateResourceReducer } from "./updateResourceReducer";
import { updatePostReducer } from "./updatePostReducer";
import { updateUserProfileReducer } from "./updateUserProfileReducer";

export const rootReducer = combineReducers({
  createResourceReducer,
  getResourcesReducer,
  deleteResourceReducer,
  updateResourceReducer,
  createPostReducer,
  getPostsReducer,
  updatePostReducer,
  getUserProfileReducer,
  createUserProfileReducer,
  updateUserProfileReducer,
  deletePostReducer,
});
