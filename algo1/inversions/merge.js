// arbitrary test arguments: two sorted arrays
let a = [4];
let b = [2];

function merge(A, B) {
    var lena = A.length;
    var lenb = B.length;
    let merged = [];
    let i = 0;
    let j = 0;
    let k;
    for (k = 0; k < (lena + lenb); k++) {
        if (i >= lena) {
            merged[k] = B[j];
            j++;
        }
        else if (j >= lenb) {
            merged[k] = A[i];
            i++;
    } else
    if (A[i] < B[j]) {
            merged[k] = A[i];
            i++;
        } else if (A[i] > B[j]) {
            merged[k] = B[j];
            j++;
        } else {
        }
    };
    return merged;
}
let merged = merge(a, b);
console.log("merged = " + merged);