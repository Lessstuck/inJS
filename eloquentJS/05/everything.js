let arr = [2, 4, 2];

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
}

// inverts a Boolean function
// function negate(a) {
//     return !a();
// }

// function test2(a) {
//     console.log(negate((a == a)));
// }

// homemade every function using some
function everything2(arr, test) {
    // someTestFalse = negate(arr.some(test));
    if (arr.some(negate(test)) == true) {
        return false;
    } else return true;
}

// test2(arr);
console.log(everything(arr, test));
// console.log(everything2(arr, test));
// console.log(test2(arr));
// console.log(test(arr));
// console.log(negate(test(arr)));