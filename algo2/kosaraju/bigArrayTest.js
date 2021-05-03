var fs = require("fs");
const _ = require("lodash");
const { copyFileSync } = require("fs");
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
var fileText = fs.readFileSync('kosarajuGraph.txt');
let fileString = String(fileText);
fileStringLines = fileString.split(cr);
for (let i = 0; i < fileStringLines.length; i++) {
    fileStringArray = fileStringLines[i].split(sp);
    fileNumberArray = [Number(fileStringArray[0]), Number(fileStringArray[1])];
    inputEdgeArray.push(fileNumberArray);
};
let originalLength = inputEdgeArray.length;
let maxVertex = 0;
for (let i = 0; i < originalLength; i++) {
    if (inputEdgeArray[i][0] > maxVertex) {
        maxVertex = inputEdgeArray[i][0];
    }
}
for (let i = 0; i < (originalLength - 1); i++)    {
    if (inputEdgeArray[i + 1][0] - inputEdgeArray[i][0] > 1) {
        console.log("oops: " + i);
    }
}
