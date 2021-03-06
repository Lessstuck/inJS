// running time of linear O(n^2) = about 5 minutes
// running time of heap O(n * log2(n)) = less than 1 second!!
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
let streamArray = [...fileStringLines];
let streamArrayLength = streamArray.length;
let favoriteChildIndex;
let runningMedian = 0
// b is bottom heap, a is top heap
let b = [0]; // Add zero at beginning so indices are easier
let a = [0];
let lowMedian; // top of bottom
let highMedian; // bottom of top
let heapInbalance   // top heap length minus bottom heap length
let heapBalancer // heap element passed to other heap to balance the two
let parentIndex, childIndexL, childIndexR;


//////////////////////////////////// minHeap
var minHeap = {
    size: a.length,
    insert: function(x) {
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
    extractMin: function () {
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
    lookatMin: function () {
        return a[1];
    }
};

//////////////////////////////////// maxHeap
var maxHeap = {
    size: b.length,
    insert: function(x) {
        b.push(x);
        function bubbleUp() {
            let i = b.length;
            while (i >= 2) {
                if (i % 2 == 0) {
                    parentIndex = i / 2;
                } else {
                    parentIndex = Math.floor(i / 2);
                };
                if (b[parentIndex] < b[i]) {   //// change from > to <
                    arraySwap(b, parentIndex, i);
                };
                i--;
            }
        };
        bubbleUp();
        return b;
    },
    extractMax: function () {  //// rename method
        max = b[1]; //// change min to max
        b[1] = b[b.length - 1];
        b.pop();
        function bubbleDown() {
            let i = 1;
            while (i < Math.floor(Math.log2(b.length))) {
                childIndexL = 2 * i;
                childIndexR = 2 * i + 1;
                if (b[childIndexL] > b[childIndexR]) {  //// change from < to >
                    favoriteChildIndex = childIndexL;
                } else {
                    favoriteChildIndex = childIndexR;
                }
                arraySwap(b, favoriteChildIndex, i);
                i = favoriteChildIndex;
            }
        };
        bubbleDown();
        return max; //// change min to max
    },
    lookatMax: function () {   //// rename method 
        return b[1];
    }
};

//////////////////////////////////// medianMaintainer
function medianMaintainer(i) {
    lowMedian = maxHeap.lookatMax();
    highMedian = minHeap.lookatMin();
    // console.log(a);
    // console.log(b);
    if (streamArray[i] >= highMedian) {
        minHeap.insert(streamArray[i]);
    } else {
        maxHeap.insert(streamArray[i]);
    };
    // rebalance heaps
    heapInbalance = a.length - b.length;
    if (heapInbalance > 1) {
        heapBalancer = minHeap.extractMin();
        maxHeap.insert(heapBalancer);
    } else if (heapInbalance < -1) {
        heapBalancer = maxHeap.extractMax();
        minHeap.insert(heapBalancer);
    };
    // get median index of numbers passed so far
    if (b.length >= a.length) {
        return maxHeap.lookatMax();
    } else {
        return minHeap.lookatMin();
    }
};

/////////////////////////////////////// Running Median
console.log(Date())
// Take care of first two elements
let newMedian;
// fill first two new elements in low and high arrays
if (streamArray[0] < streamArray[1]) {
    b.push(streamArray[0]);
    a.push(streamArray[1]);
    runningMedian = streamArray[0] + streamArray[0];
} else {
    b.push(streamArray[1]);
    a.push(streamArray[0]);
    runningMedian = streamArray[0] + streamArray[1];
}

let i = 2;  // size of b and a
for (let i = 2; i < streamArrayLength; i++) {
// for (let i = 2; i < 5 + 2; i++) {
    newMedian = medianMaintainer(i);
    runningMedian = runningMedian + newMedian;
}
console.log("problem set answer: " + runningMedian % 10000);
console.log(Date());






function arraySwap(a, x, y) {   // swaps 2 elements of array a, given their indices
    let temp = a[x];
    a[x] = a[y];
    a[y] = temp;
    return a;
}
