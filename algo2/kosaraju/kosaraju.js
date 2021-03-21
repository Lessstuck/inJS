var fs = require("fs");

let cr = /\r|\n/g;
let sp = /\s|\t/g;
let nl = /\n/g;
let tb = /\t/g;
// let sp = /\s+/g
let fileArray = [];
let fileArrayThingy = [];
let fileNumberArray = [];
var arrayOfArrays = new Array;
var originalArrayOfArrays = new Array;

// read an text file, convert to adjacency list
var fileText = fs.readFileSync('./kosarajuGraphSmall.txt');
let fileString = String(fileText);
let fileStringLines = fileString.split(cr); // 
for (let i = 0; i < fileStringLines.length; i++)    {  
    fileStringArray = fileStringLines[i].split(sp);
    fileStringArray.pop(); // delete tab at end     // restore for full txt file!!
    // if (i > 0) {                                     // restore for full txt file!!
    //     fileStringArray.shift(); // delete newline at beginning
    // }
    fileNumberArray = []
    for (let j = 0; j < fileStringArray.length; j++) {
        fileNumberArray[j] = Number(fileStringArray[j]); // convert to array of numbers
    }
    originalArrayOfArrays.push(fileNumberArray);
};

console.log(originalArrayOfArrays)
console.log(originalArrayOfArrays[0][0] + originalArrayOfArrays[1][1])
// console.log(fileStringLines)