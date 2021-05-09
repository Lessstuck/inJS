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

// set up Dijkstra
let X = [1]; // vertices processed so far (starting at 1)
let V = new Array; // directed graph with positive lengths
for (let i = 0; i < fileNumberArray.length; i++)    {
    V[i] = fileNumberArray[i]
}
let A = [0];  // shortest path distances
let a = 0; // A index

let x;
let greed = [0, 0]
while (X.length != V.length) {
    x = X.pop();
    X.push(x); // hack to get last added vertex
    console.log("x: " + " " + x)
    greed = greedy(V, x)
    console.log(greed[0] + " " + greed[1]);
    if (greed[1] != 1000000) {
        X.push(greed[0]);   // add to visted vertices
        A.push(A[a] + greed[1]);  // add to shortest distances
        a++;
    }
}


console.log(X);
console.log(A)

// greedy criterion
function greedy(V, v) {
    let min = 1000000;
    let minVertex = 1;
    let len = (V[v - 1].length)
    for (let i = 0; i < len; i++) {
        if (V.includes(String(V[v - 1][i][1])))   {
            continue;
        } else if (V[v - 1][i][1] < min) {
            min = V[v - 1][i][1];
            minVertex = V[v - 1][i][0];
        }
    }
    return [minVertex, min]
}


