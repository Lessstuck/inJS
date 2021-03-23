
let adjacencyList = [
    [1, 4], [2, 8],
    [3, 6], [4, 7],
    [5, 2], [6, 9],
    [7, 1], [8, 5, 6],
    [9, 3, 7]
];
// Assuming that the vertex numbers are natural numbers with none skipped,
let maxVertex = adjacencyList.length;
let visitedVertices = new Array;
for (let i = 0; i < maxVertex; i++) {
    visitedVertices[i] = 0;
}

// start at highest numbered vertex for kosaraju algorithm
for (let i = maxVertex; i > 0; i--) {
    if (visitedVertices[adjacencyList[i - 1][1]] == 0) {
        console.log(i)
    }
}
