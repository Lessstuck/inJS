var fs = require("fs");

var fileText = fs.readFileSync('./kargerMinCut.txt');

fileString = String(fileText);
let cr = /\r/g;
let nl = /\n/g;
let tb = /\t/g;
let fileArray = [];
let fileArrayThingy = [];
let fileNumberArray = [];
let arrayOfArrays = [];

let fileStringLines = fileString.split(cr); // 
for (let i = 0; i < 4; i++)    {  
    fileStringArray = fileStringLines[i].split(tb);
    fileStringArray.pop(); // delete tab at end of line
    // for (let j = 0; j < fileStringArray.length; j++) {
    for (let j = 0; j < fileStringArray.length; j++) {
        fileNumberArray[j] = Number(fileStringArray[j]);
    } 
    arrayOfArrays.push(fileNumberArray);
    console.log(`Length: ${arrayOfArrays.length}; Content:  ${arrayOfArrays[0]}`);
};