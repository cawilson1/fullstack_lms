import { combineReducers } from "redux";

import { createResourceReducer } from "./createResourceReducer";
import { getResourcesReducer } from "./getResourceReducer";

export const rootReducer = combineReducers({
  createResourceReducer,
  getResourcesReducer,
});
