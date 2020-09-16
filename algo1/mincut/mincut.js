var fs = require("fs");

let cr = /\r|\n/g;
let nl = /\n/g;
let tb = /\t/g;
let sp = /\s+/g
let fileArray = [];
let fileArrayThingy = [];
let fileNumberArray = [];
var arrayOfArrays = new Array;

// read an format input, from text to array of arrays of integers
// var fileText = fs.readFileSync('./kargerMinCut.txt');
var fileText = fs.readFileSync('./kargerSmall.txt');
let fileString = String(fileText);
let fileStringLines = fileString.split(cr); // 
for (let i = 0; i < fileStringLines.length; i++)    {  
    fileStringArray = fileStringLines[i].split(sp);
    // fileStringArray.pop(); // delete tab at end     // restore for full txt file!!
    // if (i > 0) {                                     // restore for full txt file!!
    //     fileStringArray.shift(); // delete newline at beginning
    // }
    fileNumberArray = []
    for (let j = 0; j < fileStringArray.length; j++) {
        fileNumberArray[j] = Number(fileStringArray[j]); // convert to array of numbers
    }
    arrayOfArrays[i] = fileNumberArray;
    console.log(`fileStringArray: ${fileStringArray}`);
};
console.log(`arrayOfArrays[5][1]: ${arrayOfArrays[5][1]}`);
rContract(arrayOfArrays);

function rContract(arrayOfArrays) {
    if (arrayOfArrays.length <= 2) {
        return arrayOfArrays;
    } else {
        let chosenEdge = randomEdge(arrayOfArrays);
        var i1 = chosenEdge[0]; // index of tail
        var v1 = chosenEdge[1]; // tail vertex number, not index
        var i2 = chosenEdge[2]; // index of head
        var v2 = chosenEdge[3]; // head vertex number, not index
        merged = merge(chosenEdge);
        console.log(`merged: ${merged}`);
        arrayOfArrays[chosenEdge[0]] = merged; // merge replaces tail
        arrayOfArrays.splice(chosenEdge[1], 1); // delete head
        arrayOfArrays.pop(); // delete merged array
        // renumber after splice
        if (arrayOfArrays.length > 2) {
            for (let i = 0; i < arrayOfArrays.length; i++) {
                var innerArrayLength = arrayOfArrays[i].length;
                for (let j = 1; j < innerArrayLength - 1; j++) {    // skipping first value in iteration
                    if (arrayOfArrays[i][j] == arrayOfArrays[i2][0]) {  // match first value (vertex number) of head array
                        arrayOfArrays[i][j] = arrayOfArrays[i1][0];   // replace second vertex with first vertex
                    } else if (arrayOfArrays[i][j] > arrayOfArrays[v2][0]) {   // shifted vertex numbers reduced by one
                        arrayOfArrays[i][j] = arrayOfArrays[i][j] - 1;

                    }
                }
            }

        }
        rContract(arrayOfArrays);
    }

}


function randomEdge(arrayOfArrays) {
    // choose inner array = [0] vertex
    var outerArrayLength = arrayOfArrays.length;
    var outerArrayChoice = Math.floor(Math.random() * outerArrayLength); // index
    let innerArray = arrayOfArrays[outerArrayChoice]; // array is value at index
    console.log(`innerArray: ${innerArray}`);
    // choose element of inner array [i] = vertices connected by one edge
    var innerArrayLength = innerArray.length; 
    console.log(`innerArrayLength: ${innerArrayLength}`);
    var innerArrayPosition = Math.floor(Math.random() * (innerArrayLength - 1)) + 1;  // choosing from all except first
    var innerArrayVertex = innerArray[innerArrayPosition]; //  number of vertex
    var chosenEdge = [outerArrayChoice, innerArray[0], innerArrayPosition, innerArrayVertex]; // outer index, vertex; innervindex, vertex
    console.log(`chosenEdge: ${chosenEdge}`);
    return (chosenEdge);

}

function merge(chosenEdge) {
    let tail = chosenEdge[0]; // outer array index
    let tailVertex = chosenEdge[1]; // vertex number
    let head = chosenEdge[2]; // outer array index 
    let headVertex = chosenEdge[3]; // vertex number
    // remve head vertex number from tail, tail vertex number from head to delete chosen edge
    let index;
    index = arrayOfArrays[tail].indexOf(headVertex);
    arrayOfArrays[tail].splice(index, 1);
    index = arrayOfArrays[head].indexOf(tailVertex); // because tail index < head index; previous splice
    arrayOfArrays[head].splice(index, 1);
    // assemble new vertex at end of array of arrays
    arrayOfArrays.push(arrayOfArrays[tail]); // start new array with tail
    let merged = arrayOfArrays[arrayOfArrays.length - 1];  // -2 (splices) and +1 new array = -1
    console.log(`merged, first version: ${merged}`);
    for (let i = 1; i < head.length; i++) {
        merged.push(head[i]);
    }
    return merged;
}