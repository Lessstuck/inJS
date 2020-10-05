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
   
// assemble test list
let node1 = new ListNode(2);
let node2 = new ListNode(5);
node1.next = node2;
let list = new LinkedList(node1);

console.log(list.head.next.data);   // returns 5!

// function arrayToList(a) {
//     let linkedList = new LinkedList(0, null);
//     for (let i = 0; i < a.length; i++)  {
//         linkedList.push(a[i]);
//     }
//     return linkedList;
// };

// function listToArray(l)  {
//     let a = [];
//     let node = l.head;
//     // do {
//     console.log(`length: ${l.length} --- data: ${node.data} --- head: ${node.next}`)
// }

// listToArray(arrayToList([2, 3, 5]));