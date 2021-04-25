import BinaryTree from "./BinaryTree";
import { rootNode } from "./rootNode";
import { IBinaryTree, ITreeNode, TraverseType } from "./types";

describe("BinaryTree tests:", () => {
  it("testing method setTree", () => {
    const tree: ITreeNode<string> = rootNode;
    const binaryTree: IBinaryTree<string> = new BinaryTree(tree);
    const newRoot: ITreeNode<string> = {
      value: "zzz",
      left: null,
      right: null,
    };
    const thisTree = binaryTree.setTree(newRoot);
    expect(new BinaryTree(newRoot)).toEqual(thisTree);
  });
});

describe.each([
  [
    TraverseType.Bfs,
    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "n", "l", "m"],
  ],
  [
    TraverseType.DfsInOrder,
    ["h", "d", "i", "b", "j", "e", "k", "a", "n", "f", "c", "l", "g", "m"],
  ],
  [
    TraverseType.DfsPostOrder,
    ["a", "b", "d", "h", "i", "e", "j", "k", "c", "f", "n", "g", "l", "m"],
  ],
  [
    TraverseType.DfsPreOrder,
    ["h", "i", "d", "j", "k", "e", "b", "n", "f", "l", "m", "g", "c", "a"],
  ],
])("testing method traverse %s", (traverseType, expected) => {
  const tree: ITreeNode<string> = rootNode;
  const binaryTree: IBinaryTree<string> = new BinaryTree(tree);

  test(`returns ${expected.join(",")}`, () => {
    expect(binaryTree.traverse(traverseType)).toEqual(expected);
  });
});

describe.each([
  [-3, ["h"]],
  [-2, ["d"]],
  [-1, ["b", "i", "j", "n"]],
  [0, ["a", "e", "f"]],
  [1, ["c", "k", "l"]],
  [2, ["g"]],
  [3, ["m"]],
])("BinaryTree.getColumn(%i)", (columnOrder, expected) => {
  const tree: ITreeNode<string> = rootNode;
  const binaryTree: IBinaryTree<string> = new BinaryTree(tree);

  test(`returns ${expected}`, () => {
    expect(binaryTree.getColumn(columnOrder)).toEqual(expected);
  });
});
