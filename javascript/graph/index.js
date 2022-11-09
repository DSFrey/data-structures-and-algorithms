class Edge {
  constructor(endpoint, weight = 1) {
    this.endpoint = endpoint;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(value) {
    this.adjacencyList.set(value, []);
    return value;
  }

  addEdge(vertex, endpoint, weight = 1) {
    const neighbors = this.adjacencyList.get(vertex);
    neighbors.push(new Edge(endpoint, weight));
  }

  getVertices() {
    return [...this.adjacencyList.keys()];
  }

  getNeighbors(vertex) {
    return [...this.adjacencyList.get(vertex)];
  }

  size() {
    return this.adjacencyList.size;
  }

  breadthTraversal(root, callback) {
    let queue = [root];
    let visited = new Set();
    visited.add(root);
    let current;

    while (queue.length) {
      current = queue.shift();
      if (callback) callback(current);

      let neighbors = this.getNeighbors(current);
      for (let edge of neighbors) {
        if (!visited.has(edge.endpoint)) {
          visited.add(edge.endpoint);
          queue.push(edge.endpoint);
        }
      }
    }
    return visited;
  }

  depthTraversal(root, callback) {
    let stack = [root];
    let visited = new Set();
    visited.add(root);
    let current;

    while (stack.length) {
      current = stack.pop();
      if (callback) callback(current);

      let neighbors =  this.getNeighbors(current);
      for (let edge of neighbors) {
        if (!visited.has(edge.endpoint)){
          visited.add(edge.endpoint);
          stack.push(edge.endpoint);
        }
      }
    }
    return visited;
  }

  checkConnected(vertex1, vertex2) {
    let group = this.breadthTraversal(vertex1);
    return group.has(vertex2);
  }
}

module.exports = Graph;
