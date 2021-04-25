export interface ITreeNode<T> {
  value: T;
  left: ITreeNode<T> | null;
  right: ITreeNode<T> | null;
}

export type ITreeNodeColumn<T> = ITreeNode<T> & { column: number };

export enum TraverseType {
  DfsInOrder,
  DfsPreOrder,
  DfsPostOrder,
  Bfs,
}

export interface IBinaryTree<T> {
  setTree(tree: ITreeNode<T>): this;
  traverse(traverseType: TraverseType): T[];
  getColumn(columnOrder: number): T[];
}

export interface IBinarySearchTree extends IBinaryTree<number> {
  has(hasValue: number): boolean;
}

export type TraverseTypeDfs = Exclude<TraverseType, TraverseType.Bfs>;
