var fs = require("fs");

// let cr = /\r|\n/g;
let cr = /\r/;
let nl = /\n/g;
let tb = /\t/g;
let sp = /\s+/g
let fileArray = [];
let fileArrayThingy = [];
let fileNumberArray = [];
var arrayOfArrays = new Array;
var originalArrayOfArrays = new Array;

// read an format input, from text to array of arrays of integers
var fileText = fs.readFileSync('./kargerMinCut.txt');
// var fileText = fs.readFileSync('./kargerSmall.txt');
let fileString = String(fileText);
let fileStringLines = fileString.split(cr); // 
for (let i = 0; i < fileStringLines.length; i++)    {  
    fileStringArray = fileStringLines[i].split(sp);
    fileStringArray.pop(); // delete tab at end     // restore for full txt file!!
    if (i > 0) {                                     // restore for full txt file!!
        fileStringArray.shift(); // delete newline at beginning
    }
    fileNumberArray = []
    for (let j = 0; j < fileStringArray.length; j++) {
        fileNumberArray[j] = Number(fileStringArray[j]); // convert to array of numbers
    }
    originalArrayOfArrays.push(fileNumberArray);
};