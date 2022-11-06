class Vertex {
  constructor(value) {
    this.value = value;
  }
}

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
    const vertex = new Vertex(value);
    this.adjacencyList.set(vertex, []);
    return vertex;
  }

  addEdge (vertex, endpoint, weight = 1) {
    const neighbors = this.adjacencyList.get(vertex);
    neighbors.push(new Edge(endpoint, weight));
  }

  getVertices () {
    return this.adjacencyList.keys();
  }

  getNeighbors (vertex) {
    return [...this.adjacencyList.clear.get(vertex)];
  }

  size() {
    return this.adjacencyList.size;
  }
}

module.exports = Graph;
