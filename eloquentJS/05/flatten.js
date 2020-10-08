var arrayOfArrays = [[1, 2, 3], [4, 5], [4, 3, 2, 1]];

const reducer = (accumulator, currentValue) => accumulator.concat(currentValue);

console.log(arrayOfArrays.reduce(reducer));
// [1, 2, 3, 4, 5, 4, 3, 2, 1]