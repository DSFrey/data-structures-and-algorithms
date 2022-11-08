# Graphs

## Graph Challenge

Implement your own Graph. The graph should be represented as an adjacency list, and should include the following methods:

- add node
  - Arguments: value
  - Returns: The added node
  - Add a node to the graph
- add edge
  - Arguments: 2 nodes to be connected by the edge, weight (optional)
  - Returns: nothing
  - Adds a new edge between two nodes in the graph
  - If specified, assign a weight to the edge
  - Both nodes should already be in the Graph
- get nodes
  - Arguments: none
  - Returns all of the nodes in the graph as a collection (set, list, or similar)
  - Empty collection returned if there are no nodes
- get neighbors
  - Arguments: node
  - Returns a collection of edges connected to the given node
    - Include the weight of the connection in the returned collection
  - Empty collection returned if there are no nodes
- size
  - Arguments: none
  - Returns the total number of nodes in the graph
  - 0 if there are none
- breadth first
  - Arguments: Node
  - Return: A collection of nodes in the order they were visited.
  - Display the collection
- Stretch Goal: Once you’ve achieved a working solution, define a new method that accepts two nodes as input and uses your traversal algorithm to determine if a path exists between the two nodes.

## Approach & Efficiency

This implementation takes advantage of javascript's Map object and its O(1) lookup time. This means `addVertex`, `addEdge`, `getNeighbors`, and `size` all have O(1) time efficiency, while `getVertices`, `breadthTraversal`, and `checkConnected` have O(n) time efficiency as they must visit all vertices in the graph. None of these methods require any additional data structures in their processing, so they all have O(1) space efficiency.

## API

- `addVertex(value)` creates a new vertex with the specified value and returns that value
- `addEdge(vertex, endpoint, weight)`adds and entry in a vertex's adjacency list connecting it with another vertex. Weight is an optional parameter that defaults to 1 if not included.
- `getVertices` returns a list of all vertices in the graph
- `getNeighbors(vertex)` returns a list of all edges starting at a vertex
- `size` returns the number of vertices in the graph
- `breadthTraversal(vertex, callback)` performs a breadth-first traveral starting at the given vertex; if included, it will perform a callback function at each vertex. It returns a list of all vertices visited
- `checkConnected(vertex1, vertex2)` returns a boolean indicating whether there is a path between the two vertices.
