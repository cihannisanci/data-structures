var BinarySearchTree = function (value) {
  var binaryTree = Object.create(binaryTreePrototype);
  binaryTree.value = value;
  binaryTree.left = null;
  binaryTree.right = null;
  return binaryTree;
};

var binaryTreePrototype = {};

binaryTreePrototype.insert = function (val) {
  if (val < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(val);
    } else {
      this.left.insert(val);
    }
  } else if (val > this.value) {
    if (this.right === null) {
      this.right = BinarySearchTree(val);
    } else {
      this.right.insert(val);
    }
  } else {
  }
};

binaryTreePrototype.contains = function (value) {
  if (value === this.value) {
    return true;
  } else if (value < this.value) {
    return !!(this.left && this.left.contains(value));
  } else if (value > this.value) {
    return !!(this.left && this.right.contains(value));
  }
};

binaryTreePrototype.depthFirstLog = function (callback) {
  callback(this.value);
  if (this.left) {
    this.left.depthFirstLog(callback);
  }
  if (this.right) {
    this.right.depthFirstLog(callback);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
