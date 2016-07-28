var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.queueSize = 0;
  this.counter = 0;
  this.storage = {}; 
};

Queue.prototype.size = function() {
  return this.queueSize;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.counter + this.queueSize] = value;
  this.queueSize++;
  return this.storage;
};

Queue.prototype.dequeue = function() {
  if (this.queueSize === 0) {
    return 0;
  }
  this.queueSize--;
  var obj = this.storage[this.counter];
  delete this.storage[this.counter];
  this.counter++;
  return obj;
};
