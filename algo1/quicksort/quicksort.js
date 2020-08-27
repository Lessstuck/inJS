// reads text file with a bunch of numbers
// converts to array and sorts in increasing order using quickSort
// counts comparisons while quicksorting

fs = require("fs");

var numberArray = [];
var len;
var comparisonCount = 0;  // for comparison count

// read text file of numbers and convert to array of integers
function readContent(callback) {
    fs.readFile('./IntegerArray.txt', (err, data) => {
        if (err) return callback(err);
        dataString = String(data);
        let re = /\r/g;
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
    let sorted = quickSort(numberArray);
    len = numberArray.length;
    console.log(`comparisons: ${comparisonCount}`);
});

function quickSort(A, l, f) {
    // if (C.length < 2) {
    //     return C;
    // }
    // var mid = Math.floor(C.length / 2);
    // var A = mergeSort(C.slice(0, mid));
    // var B = mergeSort(C.slice(mid));
    // var mergeSorted = merge(A, B);
    // return mergeSorted;
}

// function merge(left, right) {
//     var lena = left.length;
//     var lenb = right.length;
//     let merged = [];
//     let i = 0;
//     let j = 0;
//     let k;
//     for (k = 0; k < (lena + lenb); k++) {
//         if (i >= lena) {
//             merged[k] = right[j];
//             j++;
//         }
//         else if (j >= lenb) {
//             merged[k] = left[i];
//             i++;
//         } else
//             if (left[i] < right[j]) {
//                 merged[k] = left[i];
//                 i++;
//             } else if (left[i] > right[j]) {
//                 merged[k] = right[j];
//                 inversionCount = inversionCount + (lena - i); // for inversion count
//                 j++;
//             } else { // if elements are non-distinct
//                 merged[k] = left[i];
//                 i++;
//             }
//     };
//     return merged;
// }