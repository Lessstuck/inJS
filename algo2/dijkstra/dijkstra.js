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
// console.log("V");
// // console.log(V);
// console.log(V[0]);

// console.log(V[0][1][0]);
// console.log(V[0][1][1]);

let x;
let vertexCount = 1;
greedyChoice = [0, 0]
let newVertex = 1;
let newLength = 1;
let pathLength = 0;
while (vertexCount <= V.length) {
    console.log("vertexCount:");
    console.log(vertexCount);
    greedyChoice = greedyChoose(V, newVertex);
    console.log("greedyChoice: ");
    console.log(greedyChoice);
    newVertex = greedyChoice[0];
    newLength = greedyChoice[1];
    pathLength = pathLength + newLength;
    X[newVertex - 1] = pathLength;
    console.log("newVertex: " + newVertex + "  new distance: " + X[newVertex - 1]);
    vertexCount++;
}

console.log(X)

// greedyChoose criterion
function greedyChoose(V, v) {
    let min = 1000000;
    let minVertex = 1;
    let node = V[v - 1];
    // console.log(node);
    // console.log("node.length): " + node.length);
    for (let i = 1; i < node.length; i++) {
        if (X[i] != 1000000) {
            continue;
        } else     {
            if (node[i][1] < min) {
                minVertex = node[i][0];
                min = node[i][1];
            }
        }
    }
    console.log("minVertex: " + minVertex + "  " + "min: " + min)
    return [minVertex, min]
}