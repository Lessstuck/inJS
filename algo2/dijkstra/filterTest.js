let spanEdges = [[1, 2, 3], [1, 3, 4], [9, 5, 2], [3, 2, 1]]
let minEdge = [1, 2, 3]

for (let i = 0; i < spanEdges.length; i++)  {
    console.log(spanEdges[i][1] + " " + minEdge[1])
}

let newSpanEdges = spanEdges.filter(function (el) { return el[1] != minEdge[1] });

console.log(newSpanEdges);