var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {

  var anotherTree = Tree(value);
  this.children.push(anotherTree);

};

treeMethods.contains = function(target) {
  
  var found = false;

  var checkTree = function(tree) {

    if (tree.value === target) {
      found = true;
    }
    if (tree.children) {
      for (var i = 0; i < tree.children.length; i++) {
        checkTree(tree.children[i]);
      }  
    }
  };

  checkTree(this);
  
  return found;
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
