var fs = require("fs");

// read text file, convert to array of arrays of integers
let fileText = fs.readFileSync('2sum.txt');
let fileString = String(fileText);
let fileStringLines = fileString.split(/\n/);
fileStringLines.pop(); // remove trailing newline
fileStringLinesLength = fileStringLines.length;
for (let i = 0; i < fileStringLinesLength; i++) {
    fileStringLines[i] = Number(fileStringLines[i])
}
let count = 0;
let t;
let complement;
let arr, x, start, end;
let found;

/////////////////////////////////////////////////// main
console.log(Date());

let streamArray = mergeSort(fileStringLines);
let streamArrayLength = streamArray.length;


for (let t = -10000; t <= 10000; t++)   {
// for (let t = 3; t <= 10; t++)    {
// for (let t = 10; t < 11; t++) {
    found = 0;
    if (t % 100 == 0) {
        console.log("t: " + t)
    }
    for (let u = 0; u < streamArrayLength; u++)  {
        complement = t - streamArray[u];
        if (complement == streamArray[u]) {
            continue;
        }
        start = 0;
        end = streamArrayLength - 1;
        if (binarySearch(streamArray, complement, start, end)) {
            found = 1;
            // console.log("t: " + t + " streamArray[u]: " + streamArray[u] + " complement: " + complement + " count: " + count)
            continue;
        }
        // console.log("t: " + t  + " streamArray[u]: " + streamArray[u] + " complement: " + complement)
    }
    if (found == 1) {
        count++;
    }
}
console.log(Date());
console.log(count);

///////////////////////////////////////////////////// fun

function mergeSort(C) {
    if (C.length < 2) {
        return C;
    }
    var mid = Math.floor(C.length / 2);
    var A = mergeSort(C.slice(0, mid));
    var B = mergeSort(C.slice(mid));
    var mergeSorted = merge(A, B);
    return mergeSorted;
}

function merge(left, right) {
    var lena = left.length;
    var lenb = right.length;
    let merged = [];
    let i = 0;
    let j = 0;
    let k;
    for (k = 0; k < (lena + lenb); k++) {
        if (i >= lena) {
            merged[k] = right[j];
            j++;
        }
        else if (j >= lenb) {
            merged[k] = left[i];
            i++;
        } else
            if (left[i] < right[j]) {
                merged[k] = left[i];
                i++;
            } else if (left[i] > right[j]) {
                merged[k] = right[j];
                j++;
            } else { // if elements are non-distinct
                merged[k] = left[i];
                i++;
            }
    };
    return merged;
}

// binary search sourced from geeksforgeeks.org
function binarySearch(arr, x, start, end) {
    // console.log("x: " + x + " start: " + start + " end:" + end);
    if (start > end) return false;
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === x) {
        return true;
    }
    if (arr[mid] > x)
        return binarySearch(arr, x, start, mid - 1);
    else
        return binarySearch(arr, x, mid + 1, end);
}