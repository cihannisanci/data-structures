

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
   
  // if (this._storage.get(index) !== undefined) {
  //   return this._storage.set(index, this._storage.set(count));
  //   // nestedArr[k] = v;
  // }
  // this._storage.set(index, v);
  // this._storage.set(index, this._storage.set(collisionCount, this._storage.set(count, k)));
  // this._storage.set(index, this._storage.set(collisionCount, this._storage.set(count + 1, v)));
  // collisionCount++;
  
  var bucket = this._storage.get(index) || [];
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      var oldVal = tuple[1];
      tuple[1] = v;
      return oldVal;
    }
  }
  bucket.push([k, v]);

  this._storage.set(index, bucket);

  // var bucket = this._storage.get(index) || [];
  // for (var i = 0; i < bucket.length; i++) {
  //   var tuple = bucket[i];
  //   if (tuple[0] === k) {
  //     var oldVal = tuple[1];
  //     tuple[1] = v;
  //     return oldVal;
  //   } 
  // }

  // bucket.push([k, v]);
  // this._storage.set(index, bucket);

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // if (this._storage.get(index).length !== this._count) {
  //   return 'yes';
  // }
  
  // if (this._storage.get(index).length) {
  //   return 'yes';
  // }
  
  // var thisIndex = this._storage.get(index);
  // console.log(thisIndex);
  
  // for (var i = 0; i < thisIndex.length; i++) {
  //   var wasFound = false;
  //   if (thisIndex[i][0] === k) {
  //     wasFound = true;
  //   }
  //   return wasFound;
  // }
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
  return undefined;
  // console.log(this._storage, 'retrieve');
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];
  for ( var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      bucket[i].splice(tuple, 1);
      return tuple[1];
    }
  }
  return undefined;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


