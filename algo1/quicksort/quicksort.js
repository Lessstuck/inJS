// reads text file with a bunch of numbers
// converts to array and sorts in increasing order using quickSort
// counts comparisons while quicksorting

fs = require("fs");

var numberArray = [];
let A = [];
var len;
var comparisonCount = 0;  // for comparison count

// read text file of numbers and convert to array of integers
function readContent(callback) {
    fs.readFile('./QuickSort.txt', (err, data) => {
        if (err) return callback(err);
        dataString = String(data);
        let re = /\r\n/g;
        let dataStringArray = dataString.split(re);
        let dataStringArrayLength = dataStringArray.length;
        let dataArray = [];
        for (let i = 0; i < dataStringArrayLength; i++) {
            numberArray[i] = Number(dataStringArray[i]);
        };
        callback(null, data);
    });
}

// after text file is read and converted to an integer array,
readContent(function (err, data) {
    len = numberArray.length;
    quickSort(numberArray, 0, len - 1);  // first quickSort call
    for (let a = 9990; a < 10000; a++)    {
        console.log(`${numberArray[a]}, `);
    }
    console.log(`comparisons: ${comparisonCount}`);
});

function partition(A, l, r) {
    let p = A[l];
    let i = l + 1;
    for (let j = l + 1; j <= r; j++) {
        // comparisonCount++;   // alternate location for increment
        if (A[j] < p) {
            swap(A, i, j);
            i++; 
        }
    }
    swap(A, l, i - 1);
    return (i - 1);
}

function quickSort(A, l, r) {
    if (l >= r) {
        return;
    }
    comparisonCount = comparisonCount + (r - l + 1 - 1);    // add array length minus 1
    i = choosePivot(A, l, r);
    swap(A, i, l);
    let j = partition(A, l, r);
    quickSort(A, l, j - 1);
    quickSort(A, j + 1, r);
}

function swap(Z, x, y) {
    let temp = Z[x];
    Z[x] = Z[y];
    Z[y] = temp;
}

// Compare pivot-choosing algorithms by enabling one line at a time
function choosePivot(A, l, r) {
    // return l;    // pivot is left-most member
    // return r;    // pivot is right-most member
    return (Math.floor(Math.random() * (r - l)) + l);    // pivot is random member
    // return (l + Math.floor((r - l) / 2));   // pivot is the middle number
}