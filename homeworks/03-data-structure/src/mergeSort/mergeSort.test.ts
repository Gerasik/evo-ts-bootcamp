import { CompareFunction } from "./mergeSort.types";
import { mergeSort } from "./mergeSort";

interface SimpleType {
  value: number;
}

const unsortedArray: SimpleType[] = [
  { value: 2 },
  { value: 22 },
  { value: 1 },
  { value: 3 },
  { value: 4 },
];
const sortedArray: SimpleType[] = [
  { value: 1 },
  { value: 2 },
  { value: 3 },
  { value: 4 },
  { value: 22 },
];
const compareFunction: CompareFunction<SimpleType> = (a, b) => {
  return a.value - b.value;
};

describe("test mergeSort", () => {
  it("testing method mergeSort", () => {
    expect(mergeSort(unsortedArray, compareFunction)).toEqual(sortedArray);
  });
});
