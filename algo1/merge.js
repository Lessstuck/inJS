
let a = [2, 5, 6, 8,];
let b = [1, 3, 4, 9];
lena = a.length;
lenb = b.length;
let merged = [];
let i, j = 0;

for (let k = 0; k < (lena + lenb); k++ )    {
    if (a[i] < b[j]) {
        merged[k] = a[i];
        i++;
    } else {
        merged[k] = b[j];
        j++;
    }
}

console.log("merged = ");
for (let k = 0; k < (lena + lenb); k++) {
    console.log(merged[k]);
};  