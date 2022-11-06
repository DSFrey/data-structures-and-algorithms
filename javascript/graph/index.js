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

  addVertex (value) {
    this.adjacencyList.set(value, []);
    return value;
  }

  addEdge (vertex, endpoint, weight = 1) {
    const neighbors = this.adjacencyList.get(vertex);
    neighbors.push(new Edge(endpoint, weight));
  }

  getVertices () {
    return [...this.adjacencyList.keys()];
  }

  getNeighbors (vertex) {
    return [...this.adjacencyList.get(vertex)];
  }

  size() {
    return this.adjacencyList.size;
  }
}

module.exports = Graph;
