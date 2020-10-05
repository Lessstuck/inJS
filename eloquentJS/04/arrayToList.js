class ListNode  {
    constructor(data)  {
        this.data = data;
        this.next = null;
    }
};

class LinkedList  {
    constructor(head = null)   {
        this.head = head;
    }
};
   

let node = [];
function arrayToList(arr) {
    node[0] = new ListNode;
    for (let i = 1; i < arr.length; i++)  {
        node[i] = new ListNode(arr[i]);
        node[i - 1].next = node[i];
    }
    let list = new LinkedList(node[0]);
    return list;
};

let arr = [2, 3, 5];
console.log(arrayToList(arr).head.next.data); 

// function listToArray(l)  {
//     let a = [];
//     let node = l.head;
//     // do {
//     console.log(`length: ${l.length} --- data: ${node.data} --- head: ${node.next}`)
// }

// listToArray(arrayToList([2, 3, 5]));