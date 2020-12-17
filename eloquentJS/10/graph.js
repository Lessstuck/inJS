// let edges = [[]];

exports.buildGraph = function(edges) {
  let graph = Object.create(null);
  function addEdge(from, to) {
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }
  for (let i = 0; i < edges.length; i++) {
    for (j = 0; j < edges[i].length; j++) {
      addEdge(edges[i][0], edges[i][1]);
    }
  }
  return graph;
}