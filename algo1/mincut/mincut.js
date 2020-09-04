var fs = require("fs");

var fileText = fs.readFileSync('./kargerMinCut.txt');

let fileString = String(fileText);
let cr = /\r/g;
let nl = /\n/g;
let tb = /\t/g;
let sp = /\s+/g
let fileArray = [];
let fileArrayThingy = [];
let fileNumberArray = [];
let arrayOfArrays = [[]];

let fileStringLines = fileString.split(cr); // 
for (let i = 0; i < 4; i++)    {  
    fileStringArray = fileStringLines[i].split(sp);
    fileStringArray.pop(); // delete tab at end
    if (i > 0) {
        fileStringArray.shift(); // delete newline at beginning
    }
    console.log(`${fileStringArray}`);
    fileNumberArray = []
    for (let j = 0; j < fileStringArray.length; j++) {
        fileNumberArray[j] = Number(fileStringArray[j]);
    }
    arrayOfArrays[i] = fileNumberArray;
};

for (let m = 0; m < 4; m++) {
    var innerArrayLength = arrayOfArrays[m].length;
    for (let n = 0; n < 4; n++)  {
        console.log(`Length: ${innerArrayLength}; Content:  ${Number(arrayOfArrays[m][n])}`);
    }
    
    
}