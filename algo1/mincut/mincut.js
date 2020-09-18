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

// main function call
rContract(arrayOfArrays);

// main function (recursice)
function rContract(arrayOfArrays) {
    for (let a = 0; a < arrayOfArrays.length; a++) {
        console.log(`arrayOfArrays[a]: ${arrayOfArrays[a]}`);
    }
    if (arrayOfArrays.length <= 2) {
        return arrayOfArrays;
    } else {
        let chosenEdge = randomEdge(arrayOfArrays);
        console.log(`chosenEdge: ${chosenEdge};`)
        var tailIndex = chosenEdge[0]; // tail index
        var tailValue = chosenEdge[1]; // tail value (vertex number)
        var headIndex = chosenEdge[2]; // head index
        var headValue = chosenEdge[3]; // head value (vertex number)
        // merge the two vertices into one
        merged = merge(chosenEdge);
        console.log(`merged: ${merged}`);
        console.log();
        arrayOfArrays[chosenEdge[0]] = merged; // merge replaces tail
        arrayOfArrays.splice(chosenEdge[1], 1); // delete head
        arrayOfArrays.pop(); // delete merged array
        // renumber after splice
        if (arrayOfArrays.length <= 2) {
            return arrayOfArrays;
        } else  {
            for (let i = 0; i < arrayOfArrays.length; i++) {
                var innerArrayLength = arrayOfArrays[i].length;
                for (let j = 1; j < innerArrayLength - 1; j++) {    // skipping first value in iteration
                    if (arrayOfArrays[i][j] == headValue) {  // match first value (vertex number) of head array
                        arrayOfArrays[i][j] = tailValue;   // ••• replace second vertex with first vertex
                    } else if (arrayOfArrays[i][j] > headValue) {   // ••• shifted vertex numbers reduced by one
                        arrayOfArrays[i][j] = arrayOfArrays[i][j] - 1;

                    }
                }
            }
            rContract(arrayOfArrays);
        }

    }

}

// choose an edge at random, return indices and values
function randomEdge(arrayOfArrays) {
    // choose inner array = [0] vertex
    var outerArrayLength = arrayOfArrays.length;
    var outerArrayChoice = Math.floor(Math.random() * outerArrayLength); // index
    let innerArray = arrayOfArrays[outerArrayChoice]; // array is value at index
    console.log(`innerArray: ${innerArray}`);
    // choose element of inner array [i] = vertices connected by one edge
    var innerArrayLength = innerArray.length; 
    // console.log(`innerArrayLength: ${innerArrayLength}`);
    var innerArrayPosition = Math.floor(Math.random() * (innerArrayLength - 1)) + 1;  // choosing from all except first
    var innerArrayVertex = innerArray[innerArrayPosition]; //  number of vertex
    var chosenEdge = [outerArrayChoice, innerArray[0], innerArrayPosition, innerArrayVertex]; // outer index, vertex; innervindex, vertex
    console.log(`chosenEdge: ${chosenEdge}`);
    return (chosenEdge);

}

// contract the two vertices of the chosen edge
function merge(chosenEdge) {
    var tailIndex = chosenEdge[0]; // tail index
    var tailValue = chosenEdge[1]; // tail value (vertex number)
    var headIndex = chosenEdge[2]; // head index
    var headValue = chosenEdge[3]; // head value (vertex number)
    // remve head vertex number from tail, tail vertex number from head to delete chosen edge
    let index;
    index = arrayOfArrays[tailIndex].indexOf(headValue);
    arrayOfArrays[tailIndex].splice(index, 1);
    index = arrayOfArrays[headIndex].indexOf(tailValue); // because tail index < head index; previous splice
    arrayOfArrays[headIndex].splice(index, 1);
    // assemble new vertex at end of array of arrays
    arrayOfArrays.push(arrayOfArrays[tailIndex]); // start new array with tail
    let merged = arrayOfArrays[arrayOfArrays.length - 1];  // -2 (splices) and +1 new array = -1
    console.log(`merged, first version: ${merged}`);
    for (let i = 1; i < headIndex.length; i++) {
        merged.push(headIndex[i]);
    }
    return merged;
}