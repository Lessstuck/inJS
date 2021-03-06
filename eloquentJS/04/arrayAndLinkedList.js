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
    prepend(data) {
        let node = new ListNode(data);
        let newList = new LinkedList(node);
        newList.head.next = this.head;
        return newList;
    }
    nth(n) {
        let count = 0;
        let node = this.head;
        // node.data = 0;
        let countIt = () => {
            if (this.size < 1 || count >= n) return node.data;
            else {
                count++;
                node = node.next;
                countIt();
            }
        }
        countIt();
        return node.data;
    }
    
    // } 
};
   
let nodes = [];
function arrayToList(arr) {
    nodes[0] = new ListNode(arr[0]);
    for (let i = 1; i < arr.length; i++)  {
        nodes[i] = new ListNode(arr[i]);
        nodes[i - 1].next = nodes[i];
    }
    let list = new LinkedList(nodes[0]);
    return list;
};

function listToArray(list) {
    let arr = [];
    node = list.head;
    // arr.push(node.data);
    while (node) {
        arr.push(node.data);
        node = node.next;
    }
    return arr;
}

// tests
// console.log(listToArray(arrayToList([2, 4, 5, 7]).prepend(12)));
// console.log(listToArray(arrayToList([2, 3, 5])));
console.log(arrayToList([2, 4, 5, 7]).nth(3));