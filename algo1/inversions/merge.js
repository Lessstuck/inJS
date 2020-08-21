// arbitrary test arguments, as ordered arrays
let a = [2, 5, 6, 7,];
let b = [1, 3, 4, 9];
console.log("A length " + a.length);

function merge(A, B) {
    var lena = A.length;
    var lenb = B.length;
    console.log("A length " + A.length);
    let merged = [];
    let i = 0;
    let j = 0;
    let k;
    for (k = 0; k < (lena + lenb); k++) {
        if (i > lena) {
            merged[k] = B[j];
        }
        else if (j > lenb) {
            merged[k] = A[i];
        } else if (A[i] < B[j]) {
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