var fs = require("fs");

let cr = /\r|\n/g;
let sp = /\s|\t/g;
let fileNumberArray = new Array;
let inputEdgeArray = new Array;
let inputEdgeArrayRev = new Array;
let fileStringLines = new Array;
var connectedNodes = new Array;
let startVertexIndex;

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

console.log(adjacencyList);

// start at highest numbered vertex for first DFS
for (let i = maxVertex; i > 0; i--) {
    if (visitedVertices[i - 1] == 1) {
        continue;
    }
    DFS(adjacencyList, i);
    finishingTime++;
    finishingTimes[i - 1] = finishingTime;
    console.log(" ---- loop finishTimes: " + finishingTimes);
}
console.log("done");
console.log("finishTimes: " + finishingTimes);



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

console.log(adjacencyList)
// remap adjacencyList using finishing times to adjacencyListMapped
let adjacencyListLength = adjacencyList.length;
let adjacencyListMapped = new Array; // build template
for (let x = 0; x < adjacencyListLength; x++)   {
    adjacencyListMapped[x] = [0, 0];
};
console.log(adjacencyListMapped);
let newVertex;
for (let i = 0; i < adjacencyListLength; i++)   {
    let connectedNodesLength = adjacencyList[i].length;
    adjacencyListMappedIndex = finishingTimes[adjacencyList[i][0] - 1] - 1;
    for (let j = 0; j < connectedNodesLength; j++)  {
        newVertex = finishingTimes[adjacencyList[i][j] - 1];
        adjacencyListMapped[adjacencyListMappedIndex][j] = newVertex;
    }
}
console.log(adjacencyListMapped);

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

// start at highest numbered vertex for second DFS
for (let i = maxVertex; i > 0; i--) {
    if (visitedVertices[i - 1] == 1) {
        continue;
    }
    leader = i;
    DFS2(adjacencyList, i);
};

console.log(leaders);
let element;
function DFS(adjacencyList, startVertex) {
    startVertexIndex = startVertex - 1;
    visitedVertices[startVertexIndex] = 1;  // set this vertex to "visited"
    connectedNodes = [...adjacencyList[startVertexIndex]];
    connectedNodes.shift(); // remove the first vertex 
    let el;
    const vertest = (el => (visitedVertices[el - 1] == 1 || visitedVertices[el - 1] == undefined))
    if (connectedNodes.every(vertest)) { // if no more unvisited vertices, go back
        return;
    }
    const nodeTest = (el => {
        if (visitedVertices[el - 1] == 0) {   // if unvisited, recurse, going deeper
            console.log(`preDFS el: ${el}`)
            DFS(adjacencyList, el);
            console.log(`post DFS el: ${el}`)
            finishingTime++;
            finishingTimes[el - 1] = finishingTime;
        }
    });
    connectedNodes.forEach(nodeTest);
}

function DFS2(adjacencyListMapped, startVertex) {
    startVertexIndex = startVertex - 1;
    visitedVertices[startVertexIndex] = 1;  // set this vertex to "visited"
    leaders[startVertexIndex] = leader;
    connectedNodes = [...adjacencyListMapped[startVertexIndex]];
    connectedNodes.shift(); // remove the first vertex
    const vertest = (el => (visitedVertices[el - 1] == 1 || visitedVertices[el - 1] == undefined))
    if (connectedNodes.every(vertest)) { // if no more unvisited vertices, go back
        return;
    }
    const nodeTest = (el => {
        if (visitedVertices[el - 1] == 0) {   // if unvisited, recurse, going deeper
            console.log(`preDFS el: ${el}`)
            DFS(adjacencyListMapped, el);
            console.log(`post DFS el: ${el}`)
            // finishingTime++;
            // finishingTimes[el - 1] = finishingTime;
        }
    });
    connectedNodes.forEach(nodeTest);

    leaders[startVertexIndex] = leader;

    // connectedNodes.forEach(element => {
    //     if (visitedVertices[element - 1] == 0) {   // if unvisited, recurse, going deeper
    //         leaders[element - 1] = leader;
    //         DFS(adjacencyList, element);
    //     }
    // });
    // leaders[startVertexIndex] = leader;
};