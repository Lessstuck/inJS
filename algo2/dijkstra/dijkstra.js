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

let X = new Array;
let V = new Array;
for (let i = 0; i < fileNumberArray.length; i++)    {
    V[i] = fileNumberArray[i]
}
let A = new Array;
console.log(V[0]);

console.log("greedy: " + greedy(V, 1));

function greedy(V, v) {
    let min = 1000000;
    let minVertex = 1;
    for (let i = 0; i < V[v - 1].length; i++) {
        // console.log(V[i][0] + " " + V[i][1][0] + " " + V[i][1][1])
        if (V[v - 1][i][1] < min) {
            min = V[v - 1][i][1];
            minVertex = V[v - 1][i][0];
        }
    }
    return [minVertex, min]
}


