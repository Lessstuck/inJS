const arrayOfArrays = [[1, 2, 3], [4, 5], [4, 3, 2, 1]];

const reducer = (accumulator, currentValue) => accumulator + currentValue;



console.log(arrayOfArrays[1].reduce(reducer));

