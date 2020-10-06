
function deepEqual(x, y) {
    if (x === null) return "x is null"
    else if (y === null) return "y is null"
    else if (typeof (x) != "object" && typeof (y) != "object") {
        return (x == y);
    } else {
        return (x == y);
    }
}

console.log(deepEqual(3, 4));
console.log(deepEqual(3, 3));