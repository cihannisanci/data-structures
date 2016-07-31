var BinarySearchTree = function() {
  var newTree = {};

  newTree.insert = function (value) {
    var newLeaf = new Leaf(value);
    
    if (newLeaf.value < value) {
      console.log(newLeaf.value);
      newLeaf.left = value;
      console.log(newLeaf.value);
    } else if (newLeaf.value > value) {
      console.log(newLeaf.value);
      newLeaf.right = value;
      console.log(newLeaf.value);
    } else {
      console.log(newLeaf.value);
      console.log(newLeaf.right);
      return undefined;
    }
  };

  newTree.contains = function (value) {

  };

  newTree.depthFirstLog = function (value) {

  };

  return newTree;
};

var Leaf = function (value) {
  var leaf = {};

  leaf.value = value;
  leaf.left = null;
  leaf.right = null;

  return leaf;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
