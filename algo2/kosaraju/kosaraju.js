var fs = require("fs");

let cr = /\r|\n/g;
let sp = /\s|\t/g;
let fileNumberArray = [];
var inputEdgeArray = new Array;

// read an text file, convert to array of arrays of integers
var fileText = fs.readFileSync('./kosarajuGraphSmall.txt');
let fileString = String(fileText);
let fileStringLines = fileString.split(cr); // 
for (let i = 0; i < fileStringLines.length; i++)    {  
    fileStringArray = fileStringLines[i].split(sp);
    fileStringArray.pop();
    fileNumberArray = []
    for (let j = 0; j < fileStringArray.length; j++) {
        fileNumberArray[j] = Number(fileStringArray[j]); // convert to array of numbers
    }
    inputEdgeArray.push(fileNumberArray);
};
let originalLength = inputEdgeArray.length;
let maxVertex = inputEdgeArray[originalLength - 1][0];
// console.log(maxVertex);

// convert to adjacency list
let adjacencyList = [[1, 0]];
let vertex;
// build adjacencyList template
for (let i = 0; i < maxVertex; i++) {
    adjacencyList[i] = [i + 1, 0];
}
// reverse edges & iterate through inputEdgeArray
for (let i = 0; i < originalLength; i++)    {
    [inputEdgeArray[i][0], inputEdgeArray[i][1]] = [inputEdgeArray[i][1], inputEdgeArray[i][0]] // Destructure to reverse edges
    let inputVertex = inputEdgeArray[i][0];   // vertex number
    if (adjacencyList[inputVertex - 1][1] == 0) {        // overwrite intial state
        adjacencyList[inputVertex - 1][1] = inputEdgeArray[i][1];
    } else {
        adjacencyList[inputVertex - 1].push(inputEdgeArray[i][1]);  // add element to array
    }
}
console.log(adjacencyList)