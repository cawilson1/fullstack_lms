import { combineReducers } from "redux";

import { createResourceReducer } from "./resourceReducers";

export const rootReducer = combineReducers({ createResourceReducer });
