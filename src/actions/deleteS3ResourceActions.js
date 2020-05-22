// import { Storage } from "aws-amplify";

// export const DELETE_S3_RESOURCE_REQUEST = "DELETE_S3_RESOURCE_REQUEST";
// export const DELETE_S3_RESOURCE_SUCCESS = "DELETE_S3_RESOURCE_SUCCESS";
// export const DELETE_S3_RESOURCE_ERROR = "DELETE_S3_RESOURCE_ERROR";

// const deleteS3ResourceRequest = (key) => {
//   return {
//     type: DELETE_S3_RESOURCE_REQUEST,
//     key,
//   };
// };

// const deleteS3ResourceSuccess = () => {
//   return {
//     type: DELETE_S3_RESOURCE_SUCCESS,
//   };
// };

// const deleteS3ResourceError = () => {
//   return {
//     type: DELETE_S3_RESOURCE_ERROR,
//   };
// };

// const attemptDeleteS3Resource = async (dispatch, key) => {
//   dispatch(deleteS3ResourceRequest(key));
//   try {
//     const response = await Storage.remove(key);
//     console.log("attempt delete s3 resource", response);
//     dispatch(deleteS3ResourceSuccess());
//   } catch (error) {
//     dispatch(deleteS3ResourceError());
//     console.error(error);
//   }
// };

// export const deleteS3ResourceInjector = (dispatch) => {
//   return (key) => attemptDeleteS3Resource(dispatch, key);
// };
