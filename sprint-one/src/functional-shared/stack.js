// var Stack = function() {
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.
//   var someInstance = new Object;

//   _.extend(someInstance, stackMethods);
//   return someInstance;
// };

// var stackMethods = {
//   size: function () {
//     this.size = 0;
//     return this.size;
//   },
  
//   push: function (value) {
//     var storage = {};
//     storage[this.size] = value;
//     this.size++;
//     return storage[this.size];
//   },
  
//   pop: function () {
//   }
// };

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    stackSize: 0,
    storage: {}
  };
  // someInstance.stackSize = 0;
  // someInstance.storage = {};

  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {
  size: function () {
    return this.stackSize;
  },
  
  push: function (value) {
    this.storage[this.stackSize] = value;
    this.stackSize++;
    return this.storage[this.stackSize];
  },
  
  pop: function () {
    if (this.stackSize === 0) {
      return 0;
    }
    this.stackSize--;
    return this.storage[this.stackSize];
  }
};