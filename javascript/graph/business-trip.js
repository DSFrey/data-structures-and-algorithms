'use strict';

function businessTrip(graph, cityNames) {
  let total = 0;
  let notFound;
  for (let i = 0; i < cityNames.length - 1; i++) {
    notFound = true;
    let neighbors = graph.getNeighbors(cityNames[i]);
    for (let edge of neighbors) {
      if (edge.endpoint === cityNames[i + 1]) {
        total += edge.weight;
        notFound = false;
        break;
      }
    }
    if (notFound) return null;
  }
  return total;
}

module.exports = businessTrip;
