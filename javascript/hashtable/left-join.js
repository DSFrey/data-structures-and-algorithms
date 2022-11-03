'use strict';

function join(hashmap1, hashmap2, joinSide = 'left') {
  let keys;
  joinSide === 'left'
    ? keys = hashmap1.keys()
    : keys = hashmap2.keys();
  return keys.map(key => [
    key,
    hashmap1.get(key),
    hashmap2.get(key)
  ]);
}

module.exports = join;
