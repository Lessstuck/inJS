let start = 0;
let test = start => (start < 5);
let iterate = start => {
    start++;
    return start;
};  
let body = start => console.log(start);

function forLoop(start, test, iterate, body) {
    while (test(start)) {
        body(start);
        start = iterate(start);
    };
};
forLoop(start, test, iterate, body);