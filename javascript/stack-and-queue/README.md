# Stacks and Queues

## Challenge

Using a Linked List as the underlying data storage mechanism, implement both a Stack and a Queue

### Node

Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.

### Stack

Create a Stack class that has a top property. It creates an empty Stack when instantiated.

- This object should be aware of a default empty value assigned to top when the stack is created.
- The class should contain the following methods:
- push
  - Arguments: value
  - adds a new node with that value to the top of the stack with an O(1) Time performance.
- pop
  - Arguments: none
  - Returns: the value from node from the top of the stack
  - Removes the node from the top of the stack
  - Should raise exception when called on empty stack
- peek
  - Arguments: none
  - Returns: Value of the node located at the top of the stack
  - Should raise exception when called on empty stack
- is empty
  - Arguments: none
  - Returns: Boolean indicating whether or not the stack is empty.

### Queue

Create a Queue class that has a front property. It creates an empty Queue when instantiated.

- This object should be aware of a default empty value assigned to front when the queue is created.
- The class should contain the following methods:
- enqueue
  - Arguments: value
  - adds a new node with that value to the back of the queue with an O(1) Time performance.
- dequeue
  - Arguments: none
  - Returns: the value from node from the front of the queue
  - Removes the node from the front of the queue
  - Should raise exception when called on empty queue
- peek
  - Arguments: none
  - Returns: Value of the node located at the front of the queue
  - Should raise exception when called on empty stack
- is empty
  - Arguments: none
  - Returns: Boolean indicating whether or not the queue is empty

### Psuedo Queue

Create a new class called pseudo queue, but not use an existing Queue. Instead, this PseudoQueue class will implement our standard queue interface (the two methods listed below). Internally, utilize 2 Stack instances to create and manage the queue.

Methods:

- enqueue
  - Arguments: value
  - Inserts value into the PseudoQueue, using a first-in, first-out approach.
- dequeue
  - Arguments: none
  - Extracts a value from the PseudoQueue, using a first-in, first-out approach.

## Approach & Efficiency

All stack and queue functions have O(1) time performance. The push and enqueue functions both have O(n) space performance, as they have to store the input in memory, but the rest of the functions do not require any additional memory, so they have O(1) space performance.

For the psuedo queue, performance is dependent on the last operation. If you enqueue when the psueodo queue is empty or when the last operation was an enqueue, it has O(1) time performance; this is the same when you dequeue when the last operation was a dequeue. If the last operation was the opposite of the current operation, however, it has O(n) time performance as all the nodes need to transfer from one stack to the other. Enqueue has O(n) space performance, as it has to store the input in memory, but dequeue does not require any additional memory, so it has O(1) space performance.
