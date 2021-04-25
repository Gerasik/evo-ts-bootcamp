export type CompareFunction<T> = (a: T, b: T) => number;

export type MergeSort = <T = number>(
  array: T[],
  compareFunction: CompareFunction<T>
) => T[];

export type mergeArrays = <T = number>(
  a: T[],
  b: T[],
  compareFunction: CompareFunction<T>
) => T[];
