var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  

  list.addToTail = function(value) {
    var newNode = new Node(value);
    list.tail = newNode;
    if (list.head === null) {
      list.head = list.tail;
    } else {
      list.head.next = newNode;
    }
  };

  list.removeHead = function() {
    var obj = list.head;
    list.head = list.head.next;
    // if (list.contains) {
    //   return obj === list.head;
    // }
    return obj.value;
  };

  list.contains = function(target) {
    var loc = list.head;
    while (loc) {
      if (loc.value === target) {
        return true;
      }
      loc = loc.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};
