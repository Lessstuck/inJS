// running time = 5:17


var fs = require("fs");

// read text file, convert to array of arrays of integers
let fileText = fs.readFileSync('Median.txt');
let fileString = String(fileText);
fileStringLines = fileString.split(/\r\n/);
fileStringLinesLength = fileStringLines.length - 1;
for (let i = 0; i < fileStringLinesLength; i++) {
    fileStringLines[i] = Number(fileStringLines[i])
}
let streamArray = fileStringLines;
let streamArrayLength = streamArray.length;
let favoriteChildIndex;
let runningMedian = 0
let runningArray = [];

// console.log(Date())


for (let i = 0; i < streamArrayLength; i++) {
    // for (let i = 0; i < 5; i++) {
    // runningArray.push(streamArray[i]);
    // console.log(medianMaintainer(i));
    // runningMedian = runningMedian + medianMaintainer(i);

}
// console.log(runningMedian % 10000);
// console.log(runningMedian)
// console.log(Date())

function medianMaintainer(i) {
    if (i % 2 == 0) {
        // return bubbleSort(runningArray)[i / 2]
    } else {
        // return (bubbleSort(runningArray)[i / 2 - 0.5])
    }

}

let parentIndex, childIndexL, childIndexR;

// let a = streamArray;
let a = [0, 4, 4, 8, 9, 4, 12, 9, 11] 
// let a = [0];    // index starting at 1
// a.push(6);      // initial root of heap

var minHeap = {
    size: function () {
        return a.length;
    },
    insert: function (a, x) {
        a.push(x);
        function bubbleUp() {
            let i = a.length;
            while (i >= 2) {
                if (i % 2 == 0) {
                    parentIndex = i / 2;
                } else {
                    parentIndex = Math.floor(i / 2);
                };
                if (a[parentIndex] > a[i]) {
                    arraySwap(a, parentIndex, i);
                };
                i--;
            }
        };
        bubbleUp();
        return a;
    },
    extractMin: function (a) {
        min = a[1];
        a[1] = a[a.length - 1];
        a.pop();
        function bubbleDown() {
            let i = 1;
            while (i < Math.floor(Math.log2(a.length))) {
                childIndexL = 2 * i;
                childIndexR = 2 * i + 1;
                if (a[childIndexL] < a[childIndexR]) {
                    favoriteChildIndex = childIndexL;
                } else {
                    favoriteChildIndex = childIndexR;
                }
                arraySwap(a, favoriteChildIndex, i);
                i = favoriteChildIndex;
            }
        };
        bubbleDown();
        return min;
    },
    lookatMin: function (a) {
        return a[1];
    }
};

// console.log(a)
minHeap.insert(a, 14);
// console.log(a);
console.log(minHeap.extractMin(a));
// console.log(a);

function arraySwap(a, x, y) {   // swaps 2 elements of array a, given their indices
    let temp = a[x];
    a[x] = a[y];
    a[y] = temp;
    return a;
}
