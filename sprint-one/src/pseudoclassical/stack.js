var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.stackSize = 0;
  this.storage = {};
};

Stack.prototype.size = function () {
  return this.stackSize;
};

Stack.prototype.push = function (value) {
  this.storage[this.stackSize] = value;
  this.stackSize++;
  return this.storage;
};

Stack.prototype.pop = function () {
  if (this.stackSize === 0) {
    return 0;
  }
  this.stackSize--;
  var obj = this.storage[this.stackSize];
  delete this.storage[this.stackSize];
  return obj;
};