# Hashtables

## Hashtable Challenge

Implement a Hashtable Class with the following methods:

- set
  - Arguments: key, value
  - Returns: nothing
  - This method should hash the key, and set the key and value pair in the table, handling collisions as needed.
  - Should a given key already exist, replace its value from the value argument given to this method.
- get
  - Arguments: key
  - Returns: Value associated with that key in the table
- has
  - Arguments: key
  - Returns: Boolean, indicating if the key exists in the table already.
- keys
  - Returns: Collection of keys
- hash
  - Arguments: key
  - Returns: Index in the collection for that key

### Approach

I used a series of nested arrays, with the top level array using a hashing function to determine the index for a key-value pair.

### Efficiency

- Time: `set`, `get`, and `has` are all O(1) assuming a perfect mapping; if there are collisions, they are O(b), where b is the size of the bucket. `keys` will always be O(n), as it must loop over the wole table. `hash` will always be O(1), as it is not dependent on the size of the table.

- Space: O(n), growing linearly with the data it contains.

### API

- `new Hashtable(int)` creates a new hashtable with an integer length `int`
- `set(key, value)` inserts a new key-value pair into the data structure
- `get(key)` retrieves the value that corresponds to the given key
- `has(key)` returns a boolean indicating the presence of the given key
- `keys()` returns an array of all keys in the data structure
- `hash(key)` returns the hashed index value for the given key

## Reapeated Word

- Write a function called repeated word that finds the first word to occur more than once in a string.
  - Arguments: string
  - Return: string
- Stretch goal: Modify your function to return a count of each of the words in the provided string.
- Stretch goal: Modify your function to return a list of the words most frequently used in the provided string.

### Reapeated Word Approach

Putting each word into a hashmap allows for a lookup time of O(1), simplifying finding duplicate words. From there, it is taking advantage of the `keys` method and array manipulation to accomplish the stretch goals.

### Reapeated Word Efficiency

- Time: All three functions take O(n) time, as they require looping through an array.
- Space: All three functions take O(n) space, as they create newdata structures with the same size as the input.

### Reapeated Word API

- `firstRepeat(string)` finds the first repeated word in a string
- `countByWord(string)` finds the count of every word in a string
- `frequentWord(string)` finds the words that are repeated the most times in a string

## Tree Intersection

Find common values in 2 binary trees.

### Tree Intersection Approach

The first tree has each node value converted to a string and put into a hashmap, allowing for a lookup time of O(1). The second tree is then traversed, checking if the hashmap contains each string-converted value using `Hashtable.has(key)`.

### Tree Intersection Efficiency

- Time: O(m + n) The function must traverse each tree once, but because a hashmap as O(1) lookup time, there is no compounding of loops.
- Space: O(m) Only the first tree is placed into a new data structure; the second tree requires no additional storage.

### Tree Intersection API

- `inOrderCallback(tree, callback)` performs an in-order traversal of a binary tree, running a given callback on the value of each node
- `treeIntersection(tree1, tree2)` finds all common values in two binary trees

### Tree Intersection Stretch Goal

When running an in-order traverse on a binary search tree, the values are output from smallest to largest. This would mean that a hashmap is not required for O(1) lookup time, as the comparison portion of the algorithm could just iterate through an array. While this would not reduce the time efficiency into another category, it would reduce the coefficient as there would be no need to perform hashing calculations.

## Join

Implement a simplified LEFT JOIN for 2 Hashmaps.

### Join Approach

The keys are extracted from the first hashmap, then that array is mapped to a new array where each item is an array containing the key, the value we get from map 1, and the value we get from map 2.

### Join Efficiency

- Time: O(n) The function must traverse the first hashmap and then the array of keys created. The size of the second hashmap does not matter.
- Space: O(n) Only the first hashmap is placed into a new data structure; the second hashmap requires no additional storage.

### Join API

- `join(hashmap1, hashmap2, join-side)` performs a join for the two hashmaps. It will be a left join unless the join-side parameter is included with the value 'right'.

### Join Stretch Goal

It would probably be easier to do a right join by just switching the order of your arguments, but I added an optional parameter to let the function do the switching for you (that is, extract the keys from the second array instead).
