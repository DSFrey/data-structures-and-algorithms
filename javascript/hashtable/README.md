# Hashtables

## Challenge

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

## Approach

I used a series of nested arrays, with the top level array using a hashing function to determine the index for a key-value pair.

## Efficiency

- Time: `set`, `get`, and `has` are all O(1) assuming a perfect mapping; if there are collisions, they are O(b), where b is the size of the bucket. `keys` will always be O(n), as it must loop over the wole table. `hash` will always be O(1), as it is not dependent on the size of the table.

- Space: O(n), growing linearly with the data it contains.

## API

- `new Hashtable(int)` creates a new hashtable with an integer length `int`
- `set(key, value)` inserts a new key-value pair into the data structure
- `get(key)` retrieves the value that corresponds to the given key
- `has(key)` returns a boolean indicating the presence of the given key
- `keys()` returns an array of all keys in the data structure
- `hash(key)` returns the hashed index value for the given key
