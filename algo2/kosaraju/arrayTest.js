const _ = require("lodash");
let x = [40, 100, 1, 5, 25, 10];
let y = _.sortBy(x, el => x[el]);
console.log("sortBy: " + y);
// console.log("sort: " + x.sort());
// let z = x.sort(function (a, b) { return a - b });
// console.log("sort hack: " + z)
console.log("sort hack: " + x.sort(function (a, b) { return a - b }));