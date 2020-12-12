// converts ' to " quotes but skips apostrophes
let match = /(\W')|('\W)/g;
let test = `this is a test's 'test'.`
let newQuotes = test.replace(/(\W)'|'(\W)/g, "$1\"$2");
console.log(newQuotes);