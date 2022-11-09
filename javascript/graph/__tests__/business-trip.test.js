const Graph = require('..');
const businessTrip = require('../business-trip');

describe('businessTrip function', () => {
  let trainNetwork = new Graph();
  trainNetwork.addVertex('London');
  trainNetwork.addVertex('Paris');
  trainNetwork.addVertex('Berlin');
  trainNetwork.addEdge('London', 'Paris', 20);
  trainNetwork.addEdge('Paris', 'Berlin', 25);

  test('Returns cost when a trip exists', () => {
    expect(businessTrip(trainNetwork, ['London', 'Paris'])).toEqual(20);
    expect(businessTrip(trainNetwork, ['London', 'Paris', 'Berlin'])).toEqual(45);
  });
  test('Returns null when no trip exists', () => {
    expect(businessTrip(trainNetwork, ['Berlin', 'London'])).toBeNull();
  });
});
