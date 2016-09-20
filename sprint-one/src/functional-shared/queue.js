var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    queueSize: 0,
    count: 0,
    storage: {}
  };

  _.extend(someInstance, queueMethods);
  return someInstance;

};

var queueMethods = {
  size: function () {
    return this.queueSize;
  },

  enqueue: function (value) {
    this.storage[this.queueSize + this.count] = value;
    this.queueSize++;
    return this.storage;
  },

  dequeue: function () {
    if (this.queueSize === 0) {
      return 0;
    }
    this.queueSize--;
    var obj = this.storage[this.count];
    delete this.storage[this.count];
    this.count++;
    return obj;
  }
};


