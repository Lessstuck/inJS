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

readContent(function (err, data) {
    len = numberArray.length;
    quickSort(numberArray, 0, len - 1);  // first quickSort call
    console.log(`comparisons: ${comparisonCount}`);
    for (k = 5000; k < 5000 + 20; k++)    {
        console.log(`${numberArray[k]}`);
    }
});

function partition(A, l, r) {
    let p = A[l];
    let i = l + 1;
    for (let j = l + 1; j <= r; j++) {
        // comparisonCount++;
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
    comparisonCount = comparisonCount + (r - l + 1 - 1);
    h = choosePivot(A, l, r);
    // m = (l + Math.floor((r - l) / 2));
    i = medianOfThree(A, l, h, r);
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

function choosePivot(A, l, r) {
    // return l;    // pivot is left-most member
    // return r;    // pivot is right-most member
    // return (Math.floor(Math.random() * (r - l)) + l);    // pivot is random member
    return (l + Math.floor((r - l) / 2));   // pivot is median of 3
}

function medianOfThree(A, l, m, r) {
    L = A[l];
    M = A[m];
    R = A[r];
    if (L < M && M < R) {
        return m;
    }
    else if (R < M && M < L) {
        return m;
    }
    else if (M < L && L < R) {
        return l;
    }
    else if (R < L && L < M) {
        return l;
    }
    else if (M < R && R < L) {
        return r;
    }
    else if (L < R && R < M) {
        return r;
    };
}