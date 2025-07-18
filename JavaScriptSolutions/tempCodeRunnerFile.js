function TreeNode(val, left, right) {
  this.val = val;
  this.left = null;
  this.right = null;
}

const isSameTree = (p, q) => {
  let queue = [[p, q]];

  while (queue.length > 0) {
    const [node1, node2] = queue.shift();

    if (!node1 && !node2) continue;
    if (!node1 || !node2 || node1.val !== node2.val) {
      return false;
    }

    queue.push([node1.left, node2.left]);
    queue.push([node1.right, node2.right]);
  }

  return true;
};

// Example usage:
const tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(3);
const tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.right = new TreeNode(3);

console.log(isSameTree(tree1, tree2));
