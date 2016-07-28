var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.queueSize = 0;
  newQueue.count = 0;
  newQueue.storage = {};
  return newQueue;
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
      return this.queueSize = 0;
    }
    this.queueSize--;
    var obj = this.storage[this.count];
    delete this.storage[this.count];
    this.count++;
    return obj;
  }
};


