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
    size()   {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }
    getFirst() {
        return this.head;
    }
};
   
let node = [];
function arrayToList(arr) {
    node[0] = new ListNode(arr[0]);
    for (let i = 1; i < arr.length; i++)  {
        node[i] = new ListNode(arr[i]);
        node[i - 1].next = node[i];
    }
    let list = new LinkedList(node[0]);
    return list;
};

let arr = [2, 3, 5];
console.log(arrayToList(arr).head.data); 

function listToArray(list) {
    let arr = [];
    node = list.head;
    arr.push(node.data);
    while (node.next) {
        arr.push(node.data);
        node = node.next;
    }
    return arr;
}

// console.log(arrayToList([2, 4, 5, 7]).size());
console.log(listToArray(arrayToList([2, 3, 5])));
