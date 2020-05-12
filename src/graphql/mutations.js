/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createResource = /* GraphQL */ `
  mutation CreateResource(
    $input: CreateResourceInput!
    $condition: ModelResourceConditionInput
  ) {
    createResource(input: $input, condition: $condition) {
      id
      instructor
      data
      uuid
      date
      urlTitle
      urlDescription
      url
    }
  }
`;
export const updateResource = /* GraphQL */ `
  mutation UpdateResource(
    $input: UpdateResourceInput!
    $condition: ModelResourceConditionInput
  ) {
    updateResource(input: $input, condition: $condition) {
      id
      instructor
      data
      uuid
      date
      urlTitle
      urlDescription
      url
    }
  }
`;
export const deleteResource = /* GraphQL */ `
  mutation DeleteResource(
    $input: DeleteResourceInput!
    $condition: ModelResourceConditionInput
  ) {
    deleteResource(input: $input, condition: $condition) {
      id
      instructor
      data
      uuid
      date
      urlTitle
      urlDescription
      url
    }
  }
`;
