var fs = require("fs");

let cr = /\r/g;
let nl = /\n/g;
let tb = /\t/g;
let sp = /\s+/g
let fileArray = [];
let fileArrayThingy = [];
let fileNumberArray = [];
var arrayOfArrays = new Array;

// read an format input, from text to array of arrays of integers
var fileText = fs.readFileSync('./kargerMinCut.txt');
let fileString = String(fileText);
let fileStringLines = fileString.split(cr); // 
for (let i = 0; i < fileStringLines.length; i++)    {  
    fileStringArray = fileStringLines[i].split(sp);
    fileStringArray.pop(); // delete tab at end
    if (i > 0) {
        fileStringArray.shift(); // delete newline at beginning
    }
    fileNumberArray = []
    for (let j = 0; j < fileStringArray.length; j++) {
        fileNumberArray[j] = Number(fileStringArray[j]);
    }
    arrayOfArrays[i] = fileNumberArray;
};

rContract(arrayOfArrays);


function rContract(arrayOfArrays) {
    if (arrayOfArrays.length < 2) {
        return arrayOfArrays;
    }
    let chosenEdge = randomEdge(arrayOfArrays);
    var v1 = chosenEdge[0];
    var v2 = chosenEdge[1];
    merged = merge(chosenEdge);
    arrayOfArrays[chosenEdge[0]] = merged; // merge replaces tail
    arrayOfArrays.splice(chosenEdge[1], 1); // delete head
    arrayOfArrays.pop(); // delete merged array
    // renumber after splice
    if (arrayOfArrays.length > 2) {
        for (let i = 2; i < arrayOfArrays.length; i++) {
            var innerArrayLength = arrayOfArrays[i].length;
            for (let j = 1; j < innerArrayLength - 1; j++) {
                if (arrayOfArrays[i][j] == arrayOfArrays[v2][0]) {  // match first value (vertex number) of head array
                    arrayOfArrays[i][j] = arrayOfArrays[v1][0];   // replace second vertex with first vertex
                } else if (arrayOfArrays[i][j] > arrayOfArrays[v2][0]) {   // shifted vertex numbers reduced by one
                    arrayOfArrays[i][j] = arrayOfArrays[i][j] - 1;

                }
            }
        }

    }
    rContract(arrayOfArrays);
}
console.log(`result ${arrayOfArrays[0]} ${arrayOfArrays.length} `);

function randomEdge(arrayOfArrays) {
    // choose inner array = [0] vertex
    var outerArrayLength = arrayOfArrays.length;
    var outerArrayChoice = Math.floor(Math.random() * outerArrayLength - 1);
    let innerArray = arrayOfArrays[outerArrayChoice - 1];
    // choose element of inner array [i] = vertices connected by one edge
    var innerArrayLength = arrayOfArrays[outerArrayChoice - 1].length; 
    var innerArrayPosition = Math.floor(Math.random() * innerArrayLength - 1) + 1;  // choosing from all except first
    var innerArrayChoice = innerArray[innerArrayPosition];
    var chosenEdge = [outerArrayChoice, innerArrayChoice]; // indices
    return (chosenEdge);
}

function merge(chosenEdge) {
    let v1 = chosenEdge[0]; // index
    let tail = arrayOfArrays[v1 - 1];   // edges are counted from 1, but indices from 0
    let v2 = chosenEdge[1];
    let head = arrayOfArrays[v2 - 1];   // edges are counted from 1, but indices from 0
    // remve v2 vertex number from tail, v1 vertex number from head to delete chosen edge
    let index;
    index = tail.indexOf(head[0]);
    tail.splice(index, 1);
    index = head.indexOf(tail[0]);
    head.splice(index, 1);
    // assemble new vertex at end of array of arrays
    arrayOfArrays.push(tail);
    let merged = arrayOfArrays[arrayOfArrays.length - 1];
    for (let i = 1; i < head.length; i++) {
        merged.push(head[i]);
    }
    return merged;
}