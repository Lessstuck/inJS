var fs = require("fs");
let cr = /\r|\n/g;
let sp = /\s|\t/g;
let fileNumberArray = new Array;
let inputEdgeArray = new Array;
let inputEdgeArrayRev = new Array;
let fileStringLines = new Array;

var connectedNodes = new Array;
let startVertexIndex;
let nextNode = 0;
let el = 0;
let thisVertex;

// read text file, convert to array of arrays of integers
var fileText = fs.readFileSync('kosarajuGraphTest.txt');
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
// build adjacencyList template
for (let i = 0; i < maxVertex; i++) {
    adjacencyList[i] = [i + 1, 0];
}

// Build adjacency list from inputEdgeArrayRev
for (let i = 0; i < originalLength; i++) {
    inputVertex = inputEdgeArrayRev[i][0];   // vertex number (test each edge)
    if (adjacencyList[inputVertex - 1][1] == 0) {        // if first encounter of vertex …
        adjacencyList[inputVertex - 1][1] = inputEdgeArrayRev[i][1];    // … set second element to second element
    } else {
        adjacencyList[inputVertex - 1].push(inputEdgeArrayRev[i][1]);  // … otherwise, add element to array
    }
}

// Depth first search of reversed graph   
// Assuming that the vertex numbers are natural numbers,
// increasing, with none skipped,
maxVertex = adjacencyList.length;
let visitedVertices = new Array;
for (let i = 0; i < maxVertex; i++) {
    visitedVertices[i] = 0;
}
// set up finishing time array
let finishingTime = 0;
let finishingTimes = new Array;
for (let i = 0; i < maxVertex; i++) {
    finishingTimes[i] = 0;
}
let stack = new Array;
let stackitResult;

// start at highest numbered vertex for first DFS
//
const vertest = (el => (visitedVertices[el - 1] == 1 || visitedVertices[el - 1] == undefined));
const nodeTest = (el => (visitedVertices[el - 1] == 0));
for (let i = maxVertex; i > 0; i--) {
    if (visitedVertices[i - 1] == 1) {
        continue;
    }
    stack = [i];
    thisVertex = i;
    while (stack.length) {
        thisVertexIndex = thisVertex - 1;
        visitedVertices[thisVertexIndex] = 1;  // set this vertex to "visited"
        connectedNodes = [...adjacencyList[thisVertexIndex]];
        connectedNodes.shift(); // remove the first vertex 
        if (connectedNodes.every(vertest)) { // if no more unvisited vertices, go back
            finishingTime++;
            finishingTimes[thisVertexIndex] = finishingTime;
            stack.pop();
            thisVertex = stack[stack.length - 1];
        } else {
            nextNode = connectedNodes.find(nodeTest);
            stack.push(nextNode); // add this vertex to stack
            thisVertex = nextNode;
        };
    }
}
console.log(finishingTimes);
//
//          Second DFS
//
// Rebuild adjacency list
for (let i = 0; i < maxVertex; i++) {
    adjacencyList[i] = [i + 1, 0];
}
for (let i = 0; i < originalLength; i++) {
    inputVertex = inputEdgeArray[i][0];   // vertex number (test each edge)
    if (adjacencyList[inputVertex - 1][1] == 0) {        // if first encounter of vertex …
        adjacencyList[inputVertex - 1][1] = inputEdgeArray[i][1];    // … set second element to second element
    } else {
        adjacencyList[inputVertex - 1].push(inputEdgeArray[i][1]);  // … otherwise, add element to array
    }
}
// remap adjacencyList using finishing times to adjacencyListMapped
let adjacencyListLength = adjacencyList.length;
let adjacencyListMapped = new Array; // build template
for (let x = 0; x < adjacencyListLength; x++)   {
    adjacencyListMapped[x] = [0, 0];
};

let newVertex;
for (let i = 0; i < adjacencyListLength; i++)   {
    let connectedNodesLength = adjacencyList[i].length;
    adjacencyListMappedIndex = finishingTimes[adjacencyList[i][0] - 1] - 1;
    for (let j = 0; j < connectedNodesLength; j++)  {
        newVertex = finishingTimes[adjacencyList[i][j] - 1];
        adjacencyListMapped[adjacencyListMappedIndex][j] = newVertex;
    }
}

// reset visitedVertices for second DFS
for (let i = 0; i < maxVertex; i++) {
    visitedVertices[i] = 0;
}
// set up leader array for second DFS
let leader = 0;
let leaders = new Array;
for (let i = 0; i < maxVertex; i++) {
    leaders[i] = 0;
}

// largest SCCs - submit sizes of each as solution of problem
let max1 = 0; // leader of largest SCC
let max2 = 0; // leader of second largest SCC
let max3 = 0; // leader of third largest SCC
let max4 = 0; // leader of fourth largest SCC
let max5 = 0; // leader of fifth largest SCC
let thisMax = 0;

// start at highest numbered vertex for second DFS
for (let i = maxVertex; i > 0; i--) {
    if (visitedVertices[i - 1] == 1) {
        continue;
    }
    stack = [i];
    thisVertex = i;
    leader = i;
    thisMax = 1;
    while (stack.length) {
        thisVertexIndex = thisVertex - 1;
        leaders[thisVertexIndex] = leader;
        visitedVertices[thisVertexIndex] = 1;  // set this vertex to "visited"
        connectedNodes = [...adjacencyListMapped[thisVertexIndex]];
        connectedNodes.shift(); // remove the first vertex 
        if (connectedNodes.every(vertest)) { // if no more unvisited vertices, go back
            stack.pop();
            thisVertex = stack[stack.length - 1];
        } else {
            nextNode = connectedNodes.find(nodeTest);
            thisMax++;
            stack.push(nextNode); // add this vertex to stack
            thisVertex = nextNode;
        };
    }
    console.log(thisMax);
    if (thisMax > max1) {
        max1 = thisMax;
    } else if (thisMax > max2) {
        max2 = thisMax;
    } else if (thisMax > max3) {
        max3 = thisMax;
    } else if (thisMax > max4) {
        max4 = thisMax;
    } else if (thisMax > max5) {
        max5 = thisMax;
    }
}

console.log(leaders);
console.log(`${max1},${max2},${max3},${max4},${max5}`);