var fs = require("fs");
let cr = /\r|\n/g;
let sp = /\s|\t/g;
let cm = /,/
let fileNumberArray = new Array;
let inputEdgeArray = new Array;
let inputEdgeArrayRev = new Array;
let fileStringLines = new Array;
let fileStringArray = new Array;
let fileStringChunks = new Array;
let edgeNode = new Array;
let edgeNodes = new Array;
edgeNodes = [[0,0]];


// read text file, convert to array of arrays of integers
let fileText = fs.readFileSync('dijkstraData.txt');
let fileString = String(fileText);
fileStringLines = fileString.split(/\n/);
fileStringLinesLength = fileStringLines.length - 1; // hack to remove final cr from file
for (let i = 0; i < fileStringLinesLength; i++) {
    fileStringArray[i] = fileStringLines[i].split(sp);
    fileStringArray[i].pop();
    fileStringArray[i].pop();
    fileStringArray[i][0] = Number(fileStringArray[i][0]);
}
for (let i = 0; i < fileStringLinesLength; i++) {
    let fileStringArrayLength = fileStringArray[i].length;
    for (let j = 1; j < fileStringArrayLength; j++) {
        edgeNode = fileStringArray[i][j].split(/,/);
        fileStringArray[i][j] = [Number(edgeNode[0]), Number(edgeNode[1])];
    }
};
fileNumberArray = fileStringArray;
fileNumberArrayLength = fileNumberArray.length;

//
// Dijkstra setup
let X = new Array; // vertices processed so far (starting at 1)
for (let i = 0; i < fileNumberArrayLength; i++) {
    X[i] = 1000000; // length of shortest path to i
}
let V = new Array; // directed graph with positive lengths
for (let i = 0; i < fileNumberArray.length; i++)    {
    V[i] = fileNumberArray[i]
}
// let A = [0];  // shortest path distances
// let a = 0; // A index

// console.log("V: " + V);

let x;
let vertexCount = 0;
greedyChoice = [0, 0]
let newVertex;
let newLength;
let pathLength;
while (vertexCount <= V.length)  {
    greedyChoice = greedyChoose(V, newVertex);
    console.log(greedyChoice)
    newVertex = greedyChoice[0];
    newLength = greedyChoice[1];
    pathLength = pathLength + newLength;
    X[newVertex - 1] = pathLength;
    vertexCount++;
}


// console.log("X:    " + X);
// console.log(A)
// greedyChoose criterion
function greedyChoose(V, v) {
    let min = 1000000;
    let minVertex = 1;
    let node = V[v - 1];
    console.log("node: " + node);
    // console.log("node.length): " + node.length);
    for (let i = 1; i < 2; i++) {
        // if (X.includes(String(V[v - 1][i][1]))) {
        // console.log("deeper: " + X[i]);
        if (X[i] != 1000000) {
            continue;
        } else {
            // min = V[v][i][1];
            // minVertex = V[v][i][0];
            console.log("i: " + i)
        }
    }
    return [minVertex, min]
}