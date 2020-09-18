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
    // console.log(`fileStringArray: ${fileStringArray}`);
};

// main function call
rContract(arrayOfArrays);

// main function (recursice)
function rContract(arrayOfArrays) {
    for (let a = 0; a < arrayOfArrays.length; a++) {
        console.log(`arrayOfArrays[${a}]: ${arrayOfArrays[a]}`);
    }
    if (arrayOfArrays.length <= 2) {
        return arrayOfArrays;
    } else {
        let chosenEdge = randomEdge(arrayOfArrays);
        // console.log(`chosenEdge: ${chosenEdge}`);
        // var tailIndex = chosenEdge[0]; // tail index
        // var tailValue = chosenEdge[1]; // tail value (vertex number)
        // var headIndex = chosenEdge[2]; // head index
        // var headValue = chosenEdge[3]; // head value (vertex number)
        merge(arrayOfArrays);
        rContract(arrayOfArrays);
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
    // remove head value (vertex number) from tail
    let index;
    for (let j = 1; j < arrayOfArrays[tailIndex].length; j++)   {
        if (arrayOfArrays[tailIndex][j] == headValue)   {
            arrayOfArrays[tailIndex].splice(j, 1); 
        }
    }
    // find index of array with first element same as headValue
    let headArrayIndex;
    for (let k = 0; k < arrayOfArrays.length; k++) {
        if (arrayOfArrays[k][0] == headValue) {
            headArrayIndex = k;
        }
    }
    // delete tail value(vertex number) from head, push to merged tail
    for (let j = 1; j < arrayOfArrays[headArrayIndex].length; j++) {
        if (arrayOfArrays[headArrayIndex][j] == tailValue) {
            arrayOfArrays[headArrayIndex].splice(j, 1);
            arrayOfArrays[tailIndex].push(arrayOfArrays[headArrayIndex][j]);
        }
    }
    // delete head
    arrayOfArrays.splice(headArrayIndex, 1);
    console.log(`arrayOfArrays[tailIndex]: ${arrayOfArrays[tailIndex]}`);
    // remove headValue from arrayOfArrys
    for (let i = 0; i < arrayOfArrays.length; i++) {
        var innerArrayLength = arrayOfArrays[i].length;
        for (let j = 1; j < innerArrayLength; j++) {    // skipping first value in iteration
            if (arrayOfArrays[i][j] == headValue) {
                arrayOfArrays[i].splice( j, 1);
            }
        }
    }
    return arrayOfArrays;
    };