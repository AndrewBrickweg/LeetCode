function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const inOrderTraversal = (root) => {
  const result = [];

  const iotraverse = (node) => {
    if (!node) return; //base case

    iotraverse(node.left);
    result.push(node.val);

    iotraverse(node.right);
  };

  iotraverse(root);
  return result;
};

//example
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

inOrderTraversal(root); // [2, 1, 3]
console.log(inOrderTraversal(root)); // Output: [2, 1, 3]
