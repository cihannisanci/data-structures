var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[size] = value; // {0:'a'}
    size++; //size = 1
    return storage;
  };

  someInstance.pop = function() {
    if (size === 0) {
      return 0;
    }
    size--;
    console.log(storage);
    var obj = storage[size];
    delete storage[size];
    return obj;
  };

  someInstance.size = function() {
    return size;
  };
  return someInstance;
};
