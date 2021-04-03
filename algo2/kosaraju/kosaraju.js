var fs = require("fs");

let cr = /\r|\n/g;
let sp = /\s|\t/g;
let fileNumberArray = new Array;
let inputEdgeArray = new Array;
let inputEdgeArrayRev = new Array;
let fileStringLines = new Array;
var connectedNodes = new Array;

// read text file, convert to array of arrays of integers
var fileText = fs.readFileSync('kosarajuGraphSmall.txt');
let fileString = String(fileText);
fileStringLines = fileString.split(cr);
for (let i = 0; i < fileStringLines.length; i++)    {  
    fileStringArray = fileStringLines[i].split(sp);
    fileNumberArray = [Number(fileStringArray[0]), Number(fileStringArray[1])];
    inputEdgeArray.push(fileNumberArray);
};
let originalLength = inputEdgeArray.length;
let maxVertex = inputEdgeArray[originalLength - 1][0];  // assuming a continuous increasing set of array first elements

// Destructure to reverse edges
for (let i = 0; i < originalLength; i++)    {
    inputEdgeArrayRev[i] = [0, 0];
}
for (let i = 0; i < originalLength; i++)    {
    [inputEdgeArrayRev[i][0], inputEdgeArrayRev[i][1]] = [inputEdgeArray[i][1], inputEdgeArray[i][0]];
}
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
// Build adjacency list from inputEdgeArrayRev
for (let i = 0; i < originalLength; i++) {
    inputVertex = inputEdgeArrayRev[i][0];   // vertex number
    if (adjacencyListRev[inputVertex - 1][1] == 0) {        // overwrite intial state
        adjacencyListRev[inputVertex - 1][1] = inputEdgeArrayRev[i][1];
    } else {
        adjacencyListRev[inputVertex - 1].push(inputEdgeArrayRev[i][1]);  // add element to array
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

// set up finishing time array
let finishingTime = 0;
let finishingTimes = new Array;
for (let i = 0; i < maxVertex; i++) {
    previousVertices[0] = i;
    finishingTimes[i] = 0;
}

// set up leader array for second DFS
let leader = 0;
let leaders = new Array;
for (let i = 0; i < maxVertex; i++) {
    leaders[i] = 0;
}

// start at highest numbered vertex for first DFS
for (let i = maxVertex; i > 0; i--) {
    if (visitedVertices[i - 1] == 1) {
        continue;
    }
    previousVertices[0] = i;
    DFS(adjacencyListRev, i);
}

// remap edge array to finishing times
originalLength = inputEdgeArray.length;
maxVertex = inputEdgeArray[originalLength - 1][0];
for (let x = 0; x < originalLength; x++)    {
    inputEdgeArray[x][0] = finishingTimes[inputEdgeArray[x][0] - 1];
    inputEdgeArray[x][1] = finishingTimes[inputEdgeArray[x][1] - 1];
}

// Rebuild adjacency list using remapped edgeArray
for (let i = 0; i < originalLength; i++) {
    inputVertex = inputEdgeArray[i][0];   // vertex number
    if (adjacencyList[inputVertex - 1][1] == 0) {        // overwrite intial state
        adjacencyList[inputVertex - 1][1] = inputEdgeArray[i][1];
    } else {
        adjacencyList[inputVertex - 1].push(inputEdgeArray[i][1]);  // add element to array
    }
}

// reset visitedVertices for second DFS
for (let i = 0; i < maxVertex; i++) {
    visitedVertices[i] = 0;
}

// start at highest numbered vertex for second DFS
for (let i = maxVertex; i > 0; i--) {
    if (visitedVertices[i - 1] == 1) {
        continue;
    }
    DFS2(adjacencyList, i);
};

console.log(leaders);

function DFS(adjacencyListRev, startVertex) {
    let startVertexIndex = startVertex - 1;
    visitedVertices[startVertexIndex] = 1;  // set this vertex to "visited"
    connectedNodes = [...adjacencyListRev[startVertexIndex]];
    connectedNodes.shift(); // remove the first vertex 
    connectedNodes.forEach(element => {
        if (visitedVertices[element - 1] == 0) {   // if unvisited, recurse, going deeper
            previousVertices.push(element);
            DFS(adjacencyListRev, element);
        }
    });
    // if no more unvisited vertices, go back
    finishingTime++;
    finishingTimes[startVertex - 1] = finishingTime;
    previousVertices.pop();
};

function DFS2(adjacencyList, startVertex) {
    let startVertexIndex = startVertex - 1;
    visitedVertices[startVertexIndex] = 1;  // set this vertex to "visited"
    leaders[startVertexIndex] = startVertex;
    connectedNodes = [...adjacencyList[startVertexIndex]];
    connectedNodes.shift(); // remove the first vertex 
    connectedNodes.forEach(element => {
        if (visitedVertices[element - 1] == 0) {   // if unvisited, recurse, going deeper
            DFS(adjacencyList, element);
        }
    });
};