export default class Node<T> {
  val: T;
  left: Node<T> | null;
  right: Node<T> | null;

  constructor(val: T) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class Tree<T> {
  root: Node<T> | null;

  constructor() {
    this.root = null;
  }
}

function build<T>(arr: T[], start: number, end: number): Node<T> | null {

  // Base Case
  // when start = end, end is exclusive, doesn't make sense to add an empty node as a child.
  if (start >= end) return null;

  // Recursive Case

  // Pre
  const m = Math.floor((start + end) / 2);
  const root = new Node<T>(arr[m]);

  // Recursion
  root.left = build(arr, start, m);
  root.right = build(arr, m + 1, end);

  // Post
  return root;
}

function buildTree<T>(arr: T[]): Node<T> | null {

  const root = build(arr, 0, arr.length);

  return root;
}

const arr = [1, 10, 2, 4, 1, 1, 5, 6, 7, 8, 20, 10, 4, 4, 8, 13, 15, 16, 11];

arr.sort();

const map = new Map<number, boolean>();

const result: number[] = [];


for (const item of arr) {
  if (!map.has(item)) {
    map.set(item, true);
    result.push(item);
  }
}

const tree = new Tree<number>();

tree.root = buildTree(result);

const prettyPrint = <T>(node: Node<T> | null, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.val}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

prettyPrint(tree.root);
