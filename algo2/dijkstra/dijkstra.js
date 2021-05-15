var fs = require("fs");
let cr = /\r|\n/g;
let sp = /\s|\t/g;
let cm = /,/
let fileNumberArray = new Array;
let fileStringLines = new Array;
let fileStringArray = new Array;

// read text file, convert to array of arrays of integers
let fileText = fs.readFileSync('dijkstraDataTest.txt');
let fileString = String(fileText);
fileStringLines = fileString.split(/\n/);
fileStringLinesLength = fileStringLines.length // - 1; // hack to remove final cr from file  <-- don't use on test.txt
for (let i = 0; i < fileStringLinesLength; i++) {
    fileStringArray[i] = fileStringLines[i].split(sp);
    fileStringArray[i].pop();
    // fileStringArray[i].pop();   // one less pop for test.txt   <<----
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
    X[i] = 1000000; // initial length of shortest path to i
}
let V = new Array; // directed graph with positive lengths
for (let i = 0; i < fileNumberArrayLength; i++)    {
    V[i] = fileNumberArray[i]
}
let min;
let minVertex;
let hood;

let x;
let vertexCount = 1;
greedyChoice = [0, 0]
let newVertex = 1;
let pathLength = 0;
X[0] = 0; // new! put path from 1 to 1 in X

console.log(X)
while (vertexCount <= V.length) {
    min = 1000000;
    minVertex = 1;
    hood = V[newVertex - 1];
    console.log("hood: ")
    console.log(hood)
    for (let i = 1; i < hood.length; i++) {
        if (X[hood[i][0] - 1] != 1000000) {
            console.log("if")
            continue;
        } else if (hood[i][1] < min) {
            console.log("else")
            minVertex = hood[i][0];
            min = hood[i][1];
        }
    }
    console.log("return: " + minVertex + "  " + min)
    if (min == 1000000) {
        vertexCount++;
        continue;
    }
    newVertex = minVertex;
    pathLength = pathLength + min;
    X[newVertex - 1] = pathLength;
    console.log("pathLength: " + pathLength)
    vertexCount++;
}

console.log(X)

// // Output for Problem Set                    <<----
// let out = [7, 37, 59, 82, 99, 115, 133, 165, 188, 197];
// for (let i = 0; i < out.length - 1; i++) {
//     process.stdout.write(X[out[i]] + ",");
// }
// console.log(X[out[out.length - 1]]);

