

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) !== undefined) {
    this._storage.set(index, this._storage.set(this._count, k));
    this._count++;
    // nestedArr[k] = v;
  }
  this._storage.set(index, v);
  // console.log(this._storage, 'insert');
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // if (this._storage.get(index).length !== this._count) {
  //   return 'yes';
  // }
  
  // if (this._storage.get(index).length) {
  //   return 'yes';
  // }
  return this._storage.get(index);
  // console.log(this._storage, 'retrieve');
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


