// start with edges already  reversed
let adjacencyList = [
    [1, 7], [2, 5],
    [3, 9], [4, 1],
    [5, 8], [6, 3, 8],
    [7, 4, 9], [8, 2],
    [9, 6]
];
// Assuming that the vertex numbers are natural numbers,
// increasing, with none skipped,
let maxVertex = adjacencyList.length;
let visitedVertices = new Array;
for (let i = 0; i < maxVertex; i++) {
    visitedVertices[i] = 0;
}
let previousVertices = new Array;

let finishingTime = 0;
let finishingTimes = new Array;
for (let i = 0; i < maxVertex; i++) {
    previousVertices[0] = i;
    finishingTimes[i] = 0;
}

let goingBack = false;

let leader = 0;
let leaders = new Array;
for (let i = 0; i < maxVertex; i++) {
    leaders[i] = 0;
}

// start at highest numbered vertex for kosaraju algorithm
for (let i = maxVertex; i > 0; i--) {
    if (visitedVertices[i - 1] == 1) {
        continue;
    }
    goingBack = false;
    previousVertices[0] = i;  
    leaders[i] = i;
    DFS(adjacencyList, i);
}
console.log(finishingTimes);

var connectedNodes = new Array;
function DFS(adjacencyList, startVertex) {
    let startVertexIndex = startVertex - 1;
    visitedVertices[startVertexIndex] = 1;  // set this vertex to "visited"
    connectedNodes = [...adjacencyList[startVertexIndex]];
    connectedNodes.shift(); // remove the first vertex 
    connectedNodes.forEach(element => {
        if (visitedVertices[element - 1] == 0) {   // if unvisited, recurse, going deeper
            goingBack = false;
            previousVertices.push(element);
            DFS(adjacencyList, element);
        }
    });
    // if no more unvisited vertices, go back
    finishingTime++;
    finishingTimes[finishingTime - 1] = startVertex;
    previousVertices.pop();
    let previousLength = previousVertices.length;
}