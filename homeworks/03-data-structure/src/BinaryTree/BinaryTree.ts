import {
  IBinaryTree,
  ITreeNode,
  TraverseType,
  TraverseTypeDfs,
  ITreeNodeColumn,
} from "./types";

export default class BinaryTree<T> implements IBinaryTree<T> {
  protected _tree: ITreeNode<T>;

  constructor(tree: ITreeNode<T>) {
    this._tree = tree;
  }

  public setTree(tree: ITreeNode<T>) {
    this._tree = tree;
    return this;
  }

  public traverse(traverseType: TraverseType) {
    switch (traverseType) {
      case TraverseType.Bfs:
        return this.traverseBFS();
      case TraverseType.DfsInOrder:
      case TraverseType.DfsPostOrder:
      case TraverseType.DfsPreOrder:
        return this.traverseDFS(traverseType);
    }
  }

  public getColumn(columnOrder: number) {
    const items: ITreeNodeColumn<T>[] = [{ ...this._tree, column: 0 }];
    const values: T[] = [];
    while (items.length) {
      const currentItem = items.shift() as ITreeNodeColumn<T>;
      const { value, left, right, column } = currentItem;
      if (column === columnOrder) values.push(value);
      if (left) items.push({ ...left, column: column - 1 });
      if (right) items.push({ ...right, column: column + 1 });
    }
    return values;
  }

  private traverseBFS(): T[] {
    const items = [this._tree];
    const values: T[] = [];
    while (items.length) {
      const currentItem = items.shift() as ITreeNode<T>;
      const { value, left, right } = currentItem;
      values.push(value);

      if (left) items.push(left);
      if (right) items.push(right);
    }

    return values;
  }

  private traverseDFS(
    method: TraverseTypeDfs,
    treeNode: ITreeNode<T> = this._tree
  ): T[] {
    const { value, left, right } = treeNode;
    const traverseDFSfn = this.traverseDFS.bind(this, method);
    const leftItem = left ? traverseDFSfn(left) : [];
    const rightItem = right ? traverseDFSfn(right) : [];
    switch (method) {
      case TraverseType.DfsInOrder:
        return [...leftItem, value, ...rightItem];
      case TraverseType.DfsPostOrder:
        return [value, ...leftItem, ...rightItem];
      case TraverseType.DfsPreOrder:
        return [...leftItem, ...rightItem, value];
    }
  }
}
