'use strict';

function join(hashmap1, hashmap2, joinSide = 'left') {
  let keys;
  if (joinSide === 'left'){
    keys = hashmap1.keys();
  } else if (joinSide === 'right') {
    keys = hashmap2.keys();
  } else {
    throw new Error('Not an acceptable join');
  }
  return keys.map(key => [
    key,
    hashmap1.get(key),
    hashmap2.get(key)
  ]);
}

module.exports = join;
