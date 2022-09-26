# Singly Linked List

## Challenge

### Node

Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.

### Linked List

- Create a Linked List class
- Within your Linked List class, include a head property.
  - Upon instantiation, an empty Linked List should be created.
- The class should contain the following methods
  - insert
    - Arguments: value
    - Returns: nothing
    - Adds a new node with that value to the head of the list with an O(1) Time performance.
  - includes
    - Arguments: value
    - Returns: Boolean
    - Indicates whether that value exists as a Node’s value somewhere within the list.
  - toString
    - Arguments: none
    - Returns: a string representing all the values in the Linked List, formatted as:
    - "{ a } -> { b } -> { c } -> NULL"
  - append
    - arguments: new value
    - adds a new node with the given value to the end of the list
  - insert before
    - arguments: value, new value
    - adds a new node with the given new value immediately before the first node that has the value specified
  - insert after
    - arguments: value, new value
    - adds a new node with the given new value immediately after the first node that has the value specified
- Stretch Goal: Implement a doubly linked list
- Stretch Goal: Write an additional method to delete a node with the given value from the linked list

## Approach & Efficiency

- insert
  - time = O(1)
  - space = O(n)
- includes
  - time = O(n)
  - space = O(1)
- toString
  - time = O(n)
  - space = O(n)
- append
  - time = O(n)
  - space = O(n)
- insertBefore
  - time = O(n)
  - space = O(n)
- insertAfter
  - time = O(n)
  - space = O(n)
- delete
  - time = O(n)
  - space = O(1)
