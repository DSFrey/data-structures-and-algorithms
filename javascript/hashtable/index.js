'use strict';

class Hashtable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key) {
    let characters = key.split('');
    let charSum = characters.reduce((sum, char) => sum + char.charCodeAt(0), 0);
    return (charSum * 911) % this.size;
  }

  get(key) {
    let index = this.hash(key);
    if (!this.buckets[index]) return null;
    for (let i = 0; i < this.buckets[index].length; i++) {
      if (this.buckets[index][i][0] === key) return this.buckets[index][i][1];
    }
    return null;
  }

  set(key, value) {
    let index = this.hash(key);
    if (!this.buckets[index]) this.buckets[index] = [];
    for (let i = 0; i < this.buckets[index].length; i++) {
      if (this.buckets[index][i][0] === key) {
        this.buckets[index][i][1] = value;
        return;
      }
    }
    this.buckets[index].push([key, value]);
  }

  has(key) {
    let index = this.hash(key);
    if (!this.buckets[index]) return false;
    for (let i = 0; i < this.buckets[index].length; i++) {
      if (this.buckets[index][i][0] === key) return true;
    }
    return false;
  }

  keys() {
    return this.buckets.reduce((bucketList, bucket) => {
      if (!bucket) return bucketList;
      let keyList = bucket.reduce((keyList, pair) => {
        return [...keyList, pair[0]];
      }, []);
      return [...bucketList, ...keyList];
    }, []);
  }
}

module.exports = Hashtable;
