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

// Dijkstra setup
let X = new Array; // vertices processed so far (starting at 1)
for (let i = 0; i < fileNumberArrayLength; i++) {
    X[i] = 1000000; // initial length of shortest path to i
}
let V = new Array; // directed graph with positive lengths
for (let i = 0; i < fileNumberArrayLength; i++)    {
    V[i] = fileNumberArray[i]
}

let x;
let vertexCount = 1;
greedyChoice = [0, 0]
let newVertex = 1;
let pathLength = 0;
X[0] = 0; // new! put path from 1 to 1 in X

while (vertexCount <= V.length) {
    greedyChoice = greedyChoose(V, newVertex);
    newVertex = greedyChoice[0];
    pathLength = pathLength + greedyChoice[1];
    X[newVertex - 1] = pathLength;
    vertexCount++;
}

console.log(X)

// // Output for Problem Set                    <<----
// let out = [7, 37, 59, 82, 99, 115, 133, 165, 188, 197];
// for (let i = 0; i < out.length - 1; i++) {
//     process.stdout.write(X[out[i]] + ",");
// }
// console.log(X[out[out.length - 1]]);

// greedyChoose criterion
function greedyChoose(V, v) {
    let min = 1000000;
    let minVertex = 1;
    let hood = V[v - 1];
    for (let i = 1; i < hood.length; i++) {
        if (X[hood[i][0] - 1] != 1000000) {
            continue;
        } else if (hood[i][1] < min) {
                minVertex = hood[i][0];
                min = hood[i][1];
        }
    }
    return [minVertex, min]
}