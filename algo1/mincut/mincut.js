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
console.log(`randomEdge: ${randomEdge(arrayOfArrays)}`);
function randomEdge(arrayOfArrays)  {
    var outerArrayLength = arrayOfArrays.length;
    var outerArrayChoice = Math.floor(Math.random() * outerArrayLength);
    var innerArrayLength = arrayOfArrays[outerArrayChoice].length; 
    var innerArrayChoice = Math.floor(Math.random() * innerArrayLength);
    // console.log(`outerArrayChoice: ${outerArrayChoice} --- innerArrayChoice: ${innerArrayChoice}`);
    var chosenEdge = [outerArrayChoice, innerArrayChoice];
    return (chosenEdge);
}


// display vertex number and last edge (other vertex number)
// for (let k = 0; k < 4; k++) {
//     var innerArrayLength = arrayOfArrays[k].length;
//     // for (let l = 0; l < 4; l++)  {
//     console.log(`${Number(arrayOfArrays[k][0])} ${Number(arrayOfArrays[k][innerArrayLength - 1])}`);
//     // }   
// }

// for (let m = 0; m < 4; m++) {
//     var innerArrayLength = arrayOfArrays[m].length;
//     for (let n = 0; n < 4; n++)  {
//         console.log(`${Number(arrayOfArrays[m][n])}`);
//     }   
// }