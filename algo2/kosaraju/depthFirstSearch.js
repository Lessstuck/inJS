// start with edges already  reversed
let adjacencyList = [
    [1, 7], [2, 5],
    [3, 9], [4, 1],
    [5, 8], [6, 3, 8],
    [7, 4, 9], [8, 2],
    [9, 6]
];
// Assuming that the vertex numbers are natural numbers with none skipped,
let maxVertex = adjacencyList.length;
let visitedVertices = new Array;
for (let i = 0; i < maxVertex; i++) {
    visitedVertices[i] = 0;
}
let finishingTime = 0;
let finishingTimes = new Array;
for (let i = 0; i < maxVertex; i++) {
    finishingTimes[i] = 0;
}

// start at highest numbered vertex for kosaraju algorithm
for (let i = maxVertex; i > 0; i--) {
    DFS(adjacencyList, i);
}

var connectedNodes = new Array;
function DFS(adjacencyList, startVertex) {
    let startVertexIndex = startVertex - 1;
    console.log("\n")
    console.log(`startVertex: ${startVertex}`);
    visitedVertices[startVertexIndex] = 1;
    connectedNodes = [...adjacencyList[startVertexIndex]];
    connectedNodes.shift(); // remove the first vertex 
    connectedNodes.forEach(element => {
        if (visitedVertices[element - 1] == 0) {
            // finishingTime++;
            console.log("finishingTime" + finishingTime);
            DFS(adjacencyList, element);
        } else {
            finishingTime++;
            finishingTimes[element - 1] = finishingTime;
            console.log("startVertexIndex: " + startVertexIndex + "\n " + "finishingTimes: " + finishingTimes + "\n\n");
        }
    });
}