var fs = require("fs");

let cr = /\r|\n/g;
let sp = /\s|\t/g;
let fileNumberArray = [];
var inputEdgeArray = new Array;

// read an text file, convert to array of arrays of integers
var fileText = fs.readFileSync('./kosarajuGraphSmall.txt');
let fileString = String(fileText);
let fileStringLines = fileString.split(cr); // 
for (let i = 0; i < fileStringLines.length; i++)    {  
    fileStringArray = fileStringLines[i].split(sp);
    fileStringArray.pop();
    fileNumberArray = []
    for (let j = 0; j < fileStringArray.length; j++) {
        fileNumberArray[j] = Number(fileStringArray[j]); // convert to array of numbers
    }
    inputEdgeArray.push(fileNumberArray);
};
let originalLength = inputEdgeArray.length;
let maxVertex = inputEdgeArray[originalLength - 1][0];  // assuming a continuous increasing set of array first elements

// convert to adjacency list
let adjacencyList = [[1, 0]];
let adjacencyListRev = [[1, 0]];
// build adjacencyList template
for (let i = 0; i < maxVertex; i++) {
    adjacencyList[i] = [i + 1, 0];
}
for (let i = 0; i < maxVertex; i++) {
    adjacencyListRev[i] = [i + 1, 0];
}

// iterate through inputEdgeArray
for (let i = 0; i < originalLength; i++) {
    let inputVertex = inputEdgeArray[i][0];   // vertex number
    if (adjacencyList[inputVertex - 1][1] == 0) {        // overwrite intial state
        adjacencyList[inputVertex - 1][1] = inputEdgeArray[i][1];
    } else {
        adjacencyList[inputVertex - 1].push(inputEdgeArray[i][1]);  // add element to array
    }
    // reverse edges and interate through inputEdgeArrray
    [inputEdgeArray[i][0], inputEdgeArray[i][1]] = [inputEdgeArray[i][1], inputEdgeArray[i][0]] // Destructure to reverse edges
    inputVertex = inputEdgeArray[i][0];   // vertex number
    if (adjacencyListRev[inputVertex - 1][1] == 0) {        // overwrite intial state
        adjacencyListRev[inputVertex - 1][1] = inputEdgeArray[i][1];
    } else {
        adjacencyListRev[inputVertex - 1].push(inputEdgeArray[i][1]);  // add element to array
    }
}
// Depth first search of reversed graph
// Assuming that the vertex numbers are natural numbers,
// increasing, with none skipped,
maxVertex = adjacencyListRev.length;
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
    DFS(adjacencyListRev, i);
}
console.log(finishingTimes);

var connectedNodes = new Array;
function DFS(adjacencyListRev, startVertex) {
    let startVertexIndex = startVertex - 1;
    visitedVertices[startVertexIndex] = 1;  // set this vertex to "visited"
    connectedNodes = [...adjacencyListRev[startVertexIndex]];
    connectedNodes.shift(); // remove the first vertex 
    connectedNodes.forEach(element => {
        if (visitedVertices[element - 1] == 0) {   // if unvisited, recurse, going deeper
            goingBack = false;
            previousVertices.push(element);
            DFS(adjacencyListRev, element);
        }
    });
    // if no more unvisited vertices, go back
    finishingTime++;
    finishingTimes[finishingTime - 1] = startVertex;
    previousVertices.pop();
    let previousLength = previousVertices.length;
}