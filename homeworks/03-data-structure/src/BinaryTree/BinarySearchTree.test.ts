import BinarySearchTree from "./BinarySearchTree";
import { rootNodeNumber } from "./rootNode";
import { IBinarySearchTree } from "./types";

describe("BinarySearchTree tests:", () => {
  const binaryTree: IBinarySearchTree = new BinarySearchTree(rootNodeNumber);
  it("testing method has return false", () => {
    expect(binaryTree.has(1)).toBe(false);
    expect(binaryTree.has(13)).toBe(false);
  });
  it("testing method has return true", () => {
    expect(binaryTree.has(4)).toBe(true);
    expect(binaryTree.has(26)).toBe(true);
  });
});
