// define the Node data type
class Node {
    constructor(data) {
        // create two fields in node object
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    toArray() {
        let nodes = [];

        let thead = this.head;
        while (thead != null) {
            nodes.push(thead.data);
            thead = thead.next;
        }

        return nodes;
    }

    // insertAtTail
    push(data) {
        // create a new node with data
        const newNode = new Node(data);

        // check if the list is empty
        if (this.head === null) {
            // the list is empty
            this.head = newNode;
        } else {
            let thead = this.head;

            // the list is not empty
            while (thead.next != null) {
                thead = thead.next;
            }

            // thead will point to the tail node
            thead.next = newNode;
        }
    }

    // insertAtHead
    unshift(...data) {
        for (let i = data.length - 1; i >= 0; i--) {
            // create a new node
            const newNode = new Node(data[i]);

            newNode.next = this.head;

            this.head = newNode;
        }
    }
}

let list = new LinkedList();

list.push(3);
list.push(4);
list.push(6);
list.push(7);

list.unshift(2);
list.unshift(1, 0, -1);

console.log(list.toArray());

// console.log(node1.data, node1.next.data, node1.next.next.data);

/*
    list.head = Node {
        data: 3,
        next: Node {
            data: 4,
            next: Node {
                data: 6,
                next: null
            }
        }
    }
*/

/*
    https://leetcode.com/problems/middle-of-the-linked-list/?envType=problem-list-v2&envId=linked-list

    https://leetcode.com/problems/remove-duplicates-from-sorted-list/?envType=problem-list-v2&envId=linked-list

    https://leetcode.com/problems/add-two-numbers/?envType=problem-list-v2&envId=linked-list

    https://leetcode.com/problems/merge-two-sorted-lists/?envType=problem-list-v2&envId=linked-list
*/