// arbitrary test arguments, as ordered arrays
let a = [2, 5, 6, 7,];
let b = [1, 3, 4, 9];

lena = a.length;
lenb = b.length;
let merged = [];
let i = 0;
let j = 0;

for (let k = 0; k < (lena + lenb); k++) {
    if (i > lena) {
        merged[k] = b[j];
    }
    else if (j > lenb) {
        merged[k] = a[i];
    } else if (a[i] < b[j]) {
        merged[k] = a[i];
        i++;
    } else if (a[i] > b[j]) {
        merged[k] = b[j];
        j++;
    } else {
    }
};    

console.log("merged = ");
for (let k = 0; k < (lena + lenb); k++) {
    console.log(merged[k]);
};  