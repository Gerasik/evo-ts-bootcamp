import { CompareFunction, MergeSort, mergeArrays } from "./mergeSort.types";

const _mergeArrays: mergeArrays = <T>(
  left: T[],
  right: T[],
  compareFunction: CompareFunction<T>
) => {
  let arr: T[] = [];
  while (left.length && right.length) {
    if (compareFunction(left[0], right[0]) < 1) {
      arr.push(left.shift() as T);
    } else {
      arr.push(right.shift() as T);
    }
  }
  return [...arr, ...left, ...right];
};

export const mergeSort: MergeSort = (array, compareFunction) => {
  const half = array.length / 2;
  if (array.length < 2) {
    return array;
  }
  const left = array.splice(0, half);
  return _mergeArrays(
    mergeSort(left, compareFunction),
    mergeSort(array, compareFunction),
    compareFunction
  );
};
