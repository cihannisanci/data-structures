var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var counter = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[size + counter] = value;
    size++;
    return storage;
  };

  someInstance.dequeue = function() {
    if (size === 0) {
      return size;
    }
    size--;
    var obj = storage[counter];
    delete storage[counter];
    counter++;
    return obj;

  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
