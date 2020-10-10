let arr = [2, 4, 8];

// test for number being even
function test(i) {
    return (i % 2 == 0);
}

// homemade every function using loop
function everything(arr, test) {
    for (let i = 0; i < arr.length; i++)    {
        if (!test(arr[i])) {
            return false;
        }
    }
    return true;
};

// // homemade every function using some
function everything2(arr, test) {
    if (arr.some(e => !test(e))) {   // how to invert a function!
        return false;
    } else return true;
};

// compare tests
console.log(everything(arr, test));
console.log(everything2(arr, test));