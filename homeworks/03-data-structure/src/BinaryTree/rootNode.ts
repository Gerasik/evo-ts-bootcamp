import { ITreeNode } from "./types";
export const rootNode: ITreeNode<string> = {
  value: "a",
  left: {
    value: "b",
    left: {
      value: "d",
      left: {
        value: "h",
        left: null,
        right: null,
      },
      right: {
        value: "i",
        left: null,
        right: null,
      },
    },
    right: {
      value: "e",
      left: {
        value: "j",
        left: null,
        right: null,
      },
      right: {
        value: "k",
        left: null,
        right: null,
      },
    },
  },
  right: {
    value: "c",
    left: {
      value: "f",
      left: {
        value: "n",
        left: null,
        right: null,
      },
      right: null,
    },
    right: {
      value: "g",
      left: {
        value: "l",
        left: null,
        right: null,
      },
      right: {
        value: "m",
        left: null,
        right: null,
      },
    },
  },
};

export const rootNodeNumber: ITreeNode<number> = {
  value: 2,
  left: {
    value: 4,
    left: null,
    right: null,
  },
  right: {
    value: 8,
    left: {
      value: 12,
      left: null,
      right: null,
    },
    right: {
      value: 26,
      left: null,
      right: null,
    },
  },
};
