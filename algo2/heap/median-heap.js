// running time of linear O(n^2) = 5:17
// correct answer 1213


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
let bottomHeap = [0]; // Add zero at beginning so indices are easier
let topHeap = [0];
let lowMedian; // top of bottom
let highMedian; // bottom of top

/////////////////////////////////////// Running Median
// console.log(Date())
// for (let i = 0; i < streamArrayLength; i++) {
for (let i = 0; i < 5; i++) {
    newMedian = medianMaintainer(i));
    runningMedian = runningMedian + newMedian;
}
console.log(runningMedian % 10000);
console.log("runningMedian: " + runningMedian)
// console.log(Date())

function medianMaintainer(i) {
    lowMedian = maxHeap(bottomHeap).lookatMax;
    highMedian = minHeap(topHeap).lookatMin();
    if (i >= highMedian) {
        minHeap(topHeap).insert(i);
    else
        maxHeap(bottomHeap).insert(i);
    }
 
    }

    
}

let parentIndex, childIndexL, childIndexR;

let a = streamArray;
// let a = [0, 4, 4, 8, 9, 4, 12, 9, 11] 
// let a = [0, 13, 11, 12, 8, 9, 9, 4, 4, 4]
// let a = [0];    // index starting at 1
// a.push(6);      // initial root of heap

//////////////////////////////////// minHeap
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

//////////////////////////////////// maxHeap
var maxHeap = {
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
                if (a[parentIndex] < a[i]) {   //// change from > to <
                    arraySwap(a, parentIndex, i);
                };
                i--;
            }
        };
        bubbleUp();
        return a;
    },
    extractMax: function (a) {  //// rename method
        max = a[1]; //// change min to max
        a[1] = a[a.length - 1];
        a.pop();
        function bubbleDown() {
            let i = 1;
            while (i < Math.floor(Math.log2(a.length))) {
                childIndexL = 2 * i;
                childIndexR = 2 * i + 1;
                if (a[childIndexL] > a[childIndexR]) {  //// change from < to >
                    favoriteChildIndex = childIndexL;
                } else {
                    favoriteChildIndex = childIndexR;
                }
                arraySwap(a, favoriteChildIndex, i);
                i = favoriteChildIndex;
            }
        };
        bubbleDown();
        return max; //// change min to max
    },
    lookatMax: function (a) {   //// rename method 
        return a[1];
    }
};

// console.log(a)
// maxHeap.insert(a, 15);
// console.log(a);
// console.log(maxHeap.extractMax(a));
// console.log(a);

function arraySwap(a, x, y) {   // swaps 2 elements of array a, given their indices
    let temp = a[x];
    a[x] = a[y];
    a[y] = temp;
    return a;
}
