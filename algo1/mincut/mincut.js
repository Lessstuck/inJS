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
    // console.log(`${fileStringArray}`);
    fileNumberArray = []
    for (let j = 0; j < fileStringArray.length; j++) {
        fileNumberArray[j] = Number(fileStringArray[j]);
    }
    arrayOfArrays[i] = fileNumberArray;
};

let chosenEdge = randomEdge(arrayOfArrays);
console.log(`randomEdge: ${chosenEdge}`);


function randomEdge(arrayOfArrays)  {
    var outerArrayLength = arrayOfArrays.length;
    var outerArrayChoice = Math.floor(Math.random() * outerArrayLength);
    var innerArrayLength = arrayOfArrays[outerArrayChoice].length; 
    var innerArrayChoice = Math.floor(Math.random() * innerArrayLength);
    // console.log(`outerArrayChoice: ${outerArrayChoice} --- innerArrayChoice: ${innerArrayChoice}`);
    var chosenEdge = [outerArrayChoice, innerArrayChoice];
    return (chosenEdge);
}

function merge(chosenEdge) {
    
}
