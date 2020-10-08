var arrayOfArrays = [[1, 2, 3], [4, 5], [4, 3, 2, 1]];

const reducer = (accumulator, currentValue) => accumulator.concat(currentValue);

function arrayFlatten(arrayOfArrays)  {
        let result = arrayOfArrays.reduce(reducer);
        return result;
};

let flatArray = arrayFlatten(arrayOfArrays);
console.log(flatArray);