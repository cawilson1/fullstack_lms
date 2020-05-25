import {
  findIndex,
  propEq,
  compose,
  map,
  reduce,
  append,
  prop,
  sort,
} from "ramda";

export const sortByDate = (response) => {
  const updatedAtArray = function (obj) {
    let date = prop("updatedAt", obj);
    return date;
  };
  const greaterThan = function (a, b) {
    if (a > b) {
      return -1;
    } else if (a < b) {
      return 1;
    } else {
      return 0;
    }
  };
  const rebuildResourceObj = function (acc, el) {
    let index = findIndex(propEq("updatedAt", el))(response);
    acc = append(response[index], acc);
    return acc;
  };
  return compose(
    reduce(rebuildResourceObj, []),
    sort(greaterThan),
    map(updatedAtArray)
  )(response);
};
