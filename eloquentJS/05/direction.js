// using modified kludge to expose SCRIPTS
var loader = require("./load.js");
loader("scripts.js");
console.log(SCRIPTS);


function characterScript(code) {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })) {
            return script;
        }
    }
    91
    return null;
}

// function countBy(items, groupName) {
//     let counts = [];
//     for (let item of items) {
//         let name = groupName(item);
//         let known = counts.findIndex(c => c.name == name);
//         if (known == -1) {
//             counts.push({ name, count: 1 });
//         } else {
//             counts[known].count++;
//         }
//     }
//     return counts;
// }

// function textScripts(text) {
//     let scripts = countBy(text, char => {
//         let script = characterScript(char.codePointAt(0));
//         return script ? script.name : "none";
//     }).filter(({ name }) => name != "none");
//     let total = scripts.reduce((n, { count }) => n + count, 0); if (total == 0) return "No scripts found";
//     return scripts.map(({ name, count }) => {
//         return `${Math.round(count * 100 / total)}% ${name}`;
//     }).join(", ");
// }
// console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));