// import {
//   DELETE_S3_RESOURCE_REQUEST,
//   DELETE_S3_RESOURCE_SUCCESS,
//   DELETE_S3_RESOURCE_ERROR,
// } from "../actions/deleteS3ResourceActions";

// const initialState = {
//   key: null,
// };

// export const deleteS3ResourceReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case DELETE_S3_RESOURCE_REQUEST:
//       return {
//         ...state,
//         key: action.key,
//         status: action.status,
//       };
//     case DELETE_S3_RESOURCE_SUCCESS:
//       return {
//         ...state,
//         key: null,
//         status: action.status,
//       };

//     case DELETE_S3_RESOURCE_ERROR:
//       return {
//         ...state,
//         key: null,
//         status: action.status,
//       };
//     default:
//       return { ...state };
//   }
// };
