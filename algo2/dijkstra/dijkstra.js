var fs = require("fs");
let cr = /\r|\n/g;
let sp = /\s|\t/g;
let cm = /,/
let fileNumberArray = new Array;
let fileStringLines = new Array;
let fileStringArray = new Array;

// read text file, convert to array of arrays of integers
let fileText = fs.readFileSync('dijkstraData.txt');
let fileString = String(fileText);
fileStringLines = fileString.split(/\n/);
fileStringLinesLength = fileStringLines.length - 1;
for (let i = 0; i < fileStringLinesLength; i++) {
    fileStringArray[i] = fileStringLines[i].split(sp);
    fileStringArray[i].pop();
    fileStringArray[i].pop(); 
    fileStringArray[i][0] = Number(fileStringArray[i][0]);
}
for (let i = 0; i < fileStringLinesLength; i++) {
    let fileStringArrayLength = fileStringArray[i].length;
    for (let j = 1; j < fileStringArrayLength; j++) {
        edgehood = fileStringArray[i][j].split(/,/);
        fileStringArray[i][j] = [Number(edgehood[0]), Number(edgehood[1])];
    }
};
fileNumberArray = fileStringArray;
fileNumberArrayLength = fileNumberArray.length;

//
//
// Dijkstra setup
let X = new Array; // vertices processed so far (starting at 1)
for (let i = 0; i < fileNumberArrayLength; i++) {
    X[i] = 1000000; // ARBITRARY CONSTANT: initial length of shortest path to i
}
let V = new Array; // directed graph with positive lengths
for (let i = 0; i < fileNumberArrayLength; i++)    {
    V[i] = fileNumberArray[i]
}
let min;
let minVertex;
let hood;
let spanEdges = new Array;
let newSpanEdges = new Array;

let x;
let vertexCount = 1;
greedyChoice = [0, 0]
let newVertex = 1;
let pathLength = 0;
X[0] = 0; // new! put path from 1 to 1 in X

// array of edges: tail in X, head not in X, length
// initialize first version of spanEdges, starting at vertex 1
for (let i = 1; i < V[0].length; i++)   {
        spanEdges.push([1, V[0][i][0], V[0][i][1]]); // tail, head, length
}

let minEdgeAdjacencyListEdge;

// The main loop
while (spanEdges.length) {
    greedyChoice = greedyChoose(spanEdges);

    updateSpanEdges(greedyChoice);
}

function greedyChoose(spanEdges) {
    min = 1000000;
    for (let i = 0; i < spanEdges.length; i++)  {
        if (spanEdges[i][2] < min) {
            minEdge = spanEdges[i];
            min = minEdge[2];
        }
    }
    return minEdge;
}

function updateSpanEdges(minEdge) {

    // calculate new path length to vertex minEdge[1] and insert into X;
    X[minEdge[1] - 1] = minEdge[2];

    // add minEdge[0] vertices not pointing to indices in X
    for (let i = 1; i < V[minEdge[1] - 1].length; i++)  {
        minEdgeAdjacencyListEdge = V[minEdge[1] - 1][i];
        if (X[minEdgeAdjacencyListEdge[0] - 1] == 1000000) {
            spanEdges.push([minEdge[1], minEdgeAdjacencyListEdge[0], (minEdgeAdjacencyListEdge[1] + minEdge[2])]);
        }
    }

    // remove any edges pointing to same vertex as minEdge (including minEdge)
    newSpanEdges = spanEdges.filter(function (el) { return el[1] != minEdge[1] });
    spanEdges = [...newSpanEdges];
}

// // Output for Problem Set
let out = [7, 37, 59, 82, 99, 115, 133, 165, 188, 197];
for (let i = 0; i < out.length - 1; i++) {
    process.stdout.write(X[out[i] - 1] + ",");
}
console.log(X[out[out.length - 1] - 1]);

