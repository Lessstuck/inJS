var fs = require("fs");


let cr = /\r/g;
let nl = /\n/g;
let tb = /\t/g;
let sp = /\s+/g
let fileArray = [];
let fileArrayThingy = [];
let fileNumberArray = [];
let arrayOfArrays = [[]];

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

// random contraction 
let chosenEdge = randomEdge(arrayOfArrays);
merge(chosenEdge);
console.log(`chosenEdge: ${chosenEdge[0]} ${chosenEdge[1]} merged: ${merge(chosenEdge)}`);


function randomEdge(arrayOfArrays) {
    // choose inner array = [0] vertex
    var outerArrayLength = arrayOfArrays.length;
    var outerArrayChoice = Math.floor(Math.random() * outerArrayLength - 1);
    let innerArray = arrayOfArrays[outerArrayChoice - 1];
    // choose element of inner array [i] = vertices connected by one edge
    var innerArrayLength = arrayOfArrays[outerArrayChoice - 1].length; 
    var innerArrayPosition = Math.floor(Math.random() * innerArrayLength - 1) + 1;  // choosing from all except first
    var innerArrayChoice = innerArray[innerArrayPosition];
    var chosenEdge = [outerArrayChoice, innerArrayChoice];
    return (chosenEdge);
}

function merge(chosenEdge) {
    let v1 = chosenEdge[0];
    let v2 = chosenEdge[1];
    arrayOfArrays.push(arrayOfArrays[v1 - 1]);
    let merged = arrayOfArrays[arrayOfArrays.length - 1];
    // for (let i = 0; i < arrayOfArrays[v1].length; i++) {
    //     console.log(`${arrayOfArrays[v1 - 1][i]}`);
    // }
    

    return merged;
}
