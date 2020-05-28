/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateResource = /* GraphQL */ `
  subscription OnCreateResource($instructor: String!) {
    onCreateResource(instructor: $instructor) {
      id
      instructor
      data
      uuid
      urlTitle
      urlDescription
      url
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateResource = /* GraphQL */ `
  subscription OnUpdateResource($instructor: String!) {
    onUpdateResource(instructor: $instructor) {
      id
      instructor
      data
      uuid
      urlTitle
      urlDescription
      url
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteResource = /* GraphQL */ `
  subscription OnDeleteResource($instructor: String!) {
    onDeleteResource(instructor: $instructor) {
      id
      instructor
      data
      uuid
      urlTitle
      urlDescription
      url
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($author: String!) {
    onCreatePost(author: $author) {
      id
      author
      data
      uuid
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($author: String!) {
    onUpdatePost(author: $author) {
      id
      author
      data
      uuid
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($author: String!) {
    onDeletePost(author: $author) {
      id
      author
      data
      uuid
      createdAt
      updatedAt
    }
  }
`;
