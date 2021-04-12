
let adjacencyList = [
    [1, 7], [2, 5],
    [3, 9], [4, 1],
    [5, 8], [6, 3, 8],
    [7, 4, 9], [8, 2],
    [9, 6]
]
let visitedVertices = new Array;
let connectedNodes;
let maxVertex = adjacencyList.length;

for (let i = 0; i < maxVertex; i++) {
    visitedVertices[i] = 0;
}

// set up finishing time array
let finishingTime = 12;
let finishingTimes = new Array;
for (let i = 0; i < maxVertex; i++) {
    // previousVertices[0] = i;
    finishingTimes[i] = 0;
}

// console.log(visitedVertices)
console.log(DFS(adjacencyList, 6));


function DFS(adjacencyList, startVertex) {
    startVertexIndex = startVertex - 1;
    visitedVertices[startVertexIndex] = 1;  // set this vertex to "visited"
    console.log("adjacencyList[startVertexIndex]: " + adjacencyList[startVertexIndex] )
    connectedNodes = [...adjacencyList[startVertexIndex]];
    console.log("connectedNodes: " + connectedNodes);
    connectedNodes.shift(); // remove the first vertex 
    console.log(`startVertex: ${startVertex} connectedNodes: ${connectedNodes}`);
    console.log(visitedVertices);
    console.log(`connectedNodes.length: ${connectedNodes.length}`);
    let el;
    const test = (el => (visitedVertices[el - 1] == 1 || visitedVertices[el - 1] == undefined))
    if (connectedNodes.every(test)) { // if no more unvisited vertices, go back
        finishingTime++;
        finishingTimes[startVertex - 1] = finishingTime;
        console.log(" ---- finishTimes: " + finishingTimes);
    };
    return finishingTimes;
}