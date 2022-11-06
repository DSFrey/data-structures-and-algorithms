const Graph = require('..');

describe('Graph class tests', () => {
  let testGraph = new Graph();

  test('Node can be successfully added to the graph', () => {
    expect(testGraph.adjacencyList.has('test')).toBeFalsy();
    testGraph.addVertex('test');
    expect(testGraph.adjacencyList.has('test')).toBeTruthy();
  });

  test('Edge can be successfully added to the graph', () => {
    expect(testGraph.adjacencyList.get('test')[0]).toBeFalsy();
    testGraph.addVertex('anotherTest');
    testGraph.addEdge('test', 'anotherTest');
    expect(testGraph.adjacencyList.get('test')[0].endpoint).toEqual('anotherTest');
  });

  test('A collection of all nodes can be properly retrieved from the graph', () => {
    expect(testGraph.getVertices()).toContain('test', 'anotherTest');
  });

  test('All appropriate neighbors can be retrieved from the graph', () => {
    expect(testGraph.getNeighbors('test')).toEqual([{ endpoint: 'anotherTest', weight: 1 }]);
  });

  test('Neighbors are returned with the weight between nodes included', () => {
    testGraph.addVertex('weightedTest');
    testGraph.addEdge('test', 'weightedTest', 7);
    expect(testGraph.getNeighbors('test')).toContainEqual(
      { endpoint: 'anotherTest', weight: 1 },
      { endpoint: 'weightedTest', weight: 7 }
    );
  });

  test('The proper size is returned, representing the number of nodes in the graph', () => {
    expect(testGraph.size()).toEqual(3);
  });

  test('A graph with only one node and edge can be properly returned', () => {
    let soloGraph = new Graph();
    soloGraph.addVertex('solo');
    soloGraph.addEdge('solo','solo');

    expect(soloGraph.getVertices()).toEqual(['solo']);
    expect(soloGraph.getNeighbors('solo')).toEqual([{ endpoint: 'solo', weight: 1 }]);
  });
});
