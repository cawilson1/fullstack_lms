import { combineReducers } from "redux";

import { createResourceReducer } from "./createResourceReducer";
import { getResourcesReducer } from "./getResourceReducer";
import { deleteResourceReducer } from "./deleteResourceReducer";
import { updateResourceReducer } from "./updateResourceReducer";
import { createS3ResourceReducer } from "./createS3ResourceReducer";
import { getS3ResourceReducer } from "./getS3ResourceReducer";

export const rootReducer = combineReducers({
  createResourceReducer,
  getResourcesReducer,
  deleteResourceReducer,
  updateResourceReducer,
  createS3ResourceReducer,
  getS3ResourceReducer,
});
