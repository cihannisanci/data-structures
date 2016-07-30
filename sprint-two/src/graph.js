

// Instantiate a new graph
var Graph = function() {
  this.storage = [];
  // this.storage.edge = null;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage.push([node, []]);
  // var edge = [];
  // this.storage[node] = edge;
  // console.log(this.storage);
  // var newNode = this.storage;
  // newNode.value = node;
  // console.log(newNode);
  // console.log(this);
  // this.storage.value = node;
  // console.log(this);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i][0] === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i][0] === node) {
      this.storage.splice(i, 1);
    }

  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (fromNode === toNode) {
    return true;
  }
  var found1 = false;
  var found2 = false;
  
  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i][0] === fromNode) {
      for (var j = 0; j < this.storage[i][1].length; j++) {
        if (this.storage[i][1][j] === toNode) {
          found1 = true;
        }
      }
    }
  }

  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i][0] === toNode) {
      for (var j = 0; j < this.storage[i][1].length; j++) {
        if (this.storage[i][1][j] === fromNode) {
          found2 = true;
        }
      }
    }
  }

  // for (var i = 0; i < this.storage.length; i++) {
  //   for (var j = 0; j < this.storage[i].length; j++) {
  //     if (this.storage[i][1][j] === fromNode) {
  //       found1 = true;
  //     }
  //   }
  // }
  // for (var i = 0; i < this.storage.length; i++) {
  //   for (var j = 0; j < this.storage[i].length; j++) {
  //     if (this.storage[i][1][j] === toNode) {
  //       found2 = true;
  //     }
  //   }
  // }

  if (found1 && found2) {
    return true;
  }

  return false;

    
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (fromNode !== toNode) {
    for (var i = 0; i < this.storage.length; i++) {
      if (this.storage[i][0] === fromNode) {
        this.storage[i][1].push(toNode);
      }
    }
    for (var i = 0; i < this.storage.length; i++) {
      if (this.storage[i][0] === toNode) {
        this.storage[i][1].push(fromNode);
      }
    }
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.storage.length; i++) {
    for (var j = 0; j < this.storage[i].length; j++) {
      if (this.storage[i][1][j] === fromNode) {
        this.storage[i][1].splice([j], 1);
      }
    }
  }
  for (var i = 0; i < this.storage.length; i++) {
    for (var j = 0; j < this.storage[i].length; j++) {
      if (this.storage[i][1][j] === toNode) {
        this.storage[i][1].splice([j], 1);
      }
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // _.each( this.storage, function ( item ) {
  //   _.each( item, function( nestedItem ) {
  //     cb( nestedItem );
  //   });
  // });

  for (var i = 0; i < this.storage.length; i++) {
    cb(this.storage[i][0]);
    console.log(this.storage[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


