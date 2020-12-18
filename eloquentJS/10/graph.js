
exports.buildGraph = function(edges) {
  let graph = [];
  function addEdge(from, to) {
    if (graph[0] == null) {
      graph[0] = [from, to];
    } else {
      graph.push([from, to]);
    }
  }
  for (let i = 0; i < edges.length; i++) {
    addEdge(edges[i][0], edges[i][1]);
    addEdge(edges[i][1], edges[i][0]);
  }
  return graph;
}