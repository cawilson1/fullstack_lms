import { combineReducers } from "redux";

import { createResourceReducer } from "./createResourceReducer";
import { getResourcesReducer } from "./getResourceReducer";
import { deleteResourceReducer } from "./deleteResourceReducer";
import { updateResourceReducer } from "./updateResourceReducer";

export const rootReducer = combineReducers({
  createResourceReducer,
  getResourcesReducer,
  deleteResourceReducer,
  updateResourceReducer,
});
