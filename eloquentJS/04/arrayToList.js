class Node  {
    constructor(data, next)  {
        this.data = data;
        this.next = null;
    }
};


class LinkedList  {
    constructor(length, head)   {
        this.length = 0;
        this.head = null;
    }
    push(data)  {
        this.length = this.length + 1;
        if (this.head === null) {
            this.head = new Node(data, null);
        }
        // } else  {
        //     let currentNode = new Node(data);
        //     while (currentNode.next !== null)    {
        //         currentNode = currentNode.next;
        //     }
        //     currentNode.next = new Node(data);
        // }
    }
    get(node) {
        
    }
};
    

function arrayToList(a) {
    let linkedList = new LinkedList(0, null);
    for (let i = 0; i < a.length; i++)  {
        linkedList.push(a[i]);
    }
    return linkedList;
};

function listToArray(l)  {
    let a = [];
    let node = l.head;
    // do {
    console.log(`length: ${l.length} --- data: ${node.data} --- head: ${node.next}`);
    // node = node.head;
    // console.log(`data: ${node.data}`);
    //     // node = node.next;
    //     // a[i] = l.data;
    // } while (node.head != null);

}

listToArray(arrayToList([2, 3, 5]));