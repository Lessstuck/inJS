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

// array of edges with tail in X, and head not in X - includes length
// initialize first version of spanEdges, starting at vertex 1
for (let i = 1; i < V[0].length; i++)   {
    if (X[V[0][i][1]] == 1000000) {
        spanEdges.push([1, V[0][i][0], V[0][i][1]]); // tail, head, length
    }
}
let minEdgeAdjacencyListEdge;
console.log("spanEdges: ");
console.log(spanEdges);
// while (spanEdges.length) {
greedyChoice = greedyChoose(spanEdges);
console.log("greedyChoice: ");
console.log(greedyChoice);

updateSpanEdges(greedyChoice);
// }
console.log("post update spanEdges: ");
console.log(spanEdges);

function greedyChoose(spanEdges) {
    min = 1000000;
    for (let i = 0; i < spanEdges.length; i++)  {
        if (spanEdges[i][1] < min) {
            minEdge = spanEdges[i];
            min = minEdge[1];
        }
    }
    return minEdge;
}

function updateSpanEdges(minEdge) {
    // add minEdge[0] vertices not pointing to indices in X
    for (let i = 1; i < V[minEdge[1]].length; i++)  {
        minEdgeAdjacencyListEdge = V[minEdge[1] - 1][i];
        console.log(minEdge[1]);
        console.log(minEdgeAdjacencyListEdge);
        // console.log(minEdgeAdjacencyListEdge[1]);

        console.log("copy: " + [minEdge[0], minEdgeAdjacencyListEdge[0], minEdgeAdjacencyListEdge[1]]);
        console.log(minEdgeAdjacencyListEdge[1])
        if (X[minEdgeAdjacencyListEdge[0] - 1] == 1000000) {
            spanEdges.push([minEdge[0], minEdgeAdjacencyListEdge[0], minEdgeAdjacencyListEdge[1]]);
        }
    }

    // remove any edges pointing to same vertex as minEdge (including minEdge)
    newSpanEdges = spanEdges.filter(function (el) { return el[1] != minEdge[1] });
    spanEdges = [...newSpanEdges];
    console.log("post filter out pointers to choice: ");
    console.log(spanEdges)
    // add minEdge to X
    pathLength = pathLength + minEdge[2];
    X[minEdge[1] - 1] = pathLength;
    console.log(X);
}


// }

// // while (vertexCount <= V.length) {
// //     min = 1000000;
// //     minVertex = 1;
// //     hood = V[newVertex - 1];
// //     for (let i = 1; i < hood.length; i++) {
// //         if (X[hood[i][0] - 1] != 1000000) {
// //             continue;
// //         } else if (hood[i][1] < min) {
// //             minVertex = hood[i][0];
// //             min = hood[i][1];
// //         }
// //     }
// //     if (min == 1000000) {
// //         vertexCount++;
// //         continue;
// //     }
// //     newVertex = minVertex;
// //     pathLength = pathLength + min;
// //     X[newVertex - 1] = pathLength;
// //     vertexCount++;
// // }

// console.log(X)

// // Output for Problem Set                    <<----
// let out = [7, 37, 59, 82, 99, 115, 133, 165, 188, 197];
// for (let i = 0; i < out.length - 1; i++) {
//     process.stdout.write(X[out[i]] + ",");
// }
// console.log(X[out[out.length - 1]]);

