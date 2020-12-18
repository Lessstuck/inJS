
exports.buildGraph = function(edges) {
  let graph = [];
  function addEdge(from, to) {
    if (graph[0] == null) {
      graph[0] = [from, to];
    } else {
      graph.push([from, to]);
    }
  }
  for (let [from, to] of edges.map(r => r.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}