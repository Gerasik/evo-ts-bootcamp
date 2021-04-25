import BinaryTree from "./BinaryTree";
import { IBinarySearchTree, ITreeNode } from "./types";

export default class BinarySearchTree
  extends BinaryTree<number>
  implements IBinarySearchTree {
  public has(hasValue: number): boolean {
    const items = [this._tree];
    while (items.length) {
      const currentItem = items.shift() as ITreeNode<number>;
      const { value, left, right } = currentItem;
      if (value === hasValue) return true;
      if (left) items.push(left);
      if (right) items.push(right);
    }
    return false;
  }
}
