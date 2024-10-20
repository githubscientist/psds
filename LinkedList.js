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
        this.length = 0;
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

        this.length++;
    }

    // insertAtHead
    unshift(...data) {
        for (let i = data.length - 1; i >= 0; i--) {
            // create a new node
            const newNode = new Node(data[i]);

            newNode.next = this.head;

            this.head = newNode;

            this.length++;
        }
    }

    // deleteAtTail
    pop() {
        // check if the list is empty
        if (this.head === null) {
            // we should not perform deletion
            return;
        } else {
            // the list has atleast one node
            // check if the list has one node or more than one node
            if (this.head.next === null) {
                // the list has only one node
                this.head = null;
            } else {
                // the list has more than one node
                let tailPrevious = this.head;

                while (tailPrevious.next.next !== null) {
                    tailPrevious = tailPrevious.next;
                }

                // after coming out of the loop
                // tailPrevious.next.next will be null
                // tailPrevious.next is the tail node
                tailPrevious.next = null;
            }
        }
        this.length--;
    }

    // deleteAtHead
    shift() {
        // check if the list is empty
        if (this.head === null) {
            // list is empty
            // we should allow the deletion to happen
            return;
        } else {
            // the list is not empty
            // the list has at least one element
            this.head = this.head.next;
        }
        this.length--;
    }

    insert(pos, data) {
        if (pos === 0) {
            // insert the node at the beginning of the list
            this.unshift(data);
        } else if (pos === this.length - 1) {
            this.push(data);
        } else {
            let thead = this.head;

            // move the thead, pos-1 number of times
            for (let i = 1; i <= pos - 1; i++) {
                thead = thead.next;
            }

            // the nextnode of the thead is where we need to insert the new node
            // create a new node
            let newNode = new Node(data);

            newNode.next = thead.next;
            thead.next = newNode;
        }

        this.length++;
    }
}

let list = new LinkedList();

list.push(3);
list.push(4);
list.push(6);
list.push(7);

list.unshift(2);
list.unshift(1, 0, -1);

// to remove a particular element from the tail of the linked list
list.pop();
list.pop();
list.pop();

// list.shift();
// list.shift();

// insert(pos, data)
list.insert(0, 11);
list.insert(1, 12);
list.insert(5, 15);

console.log(list.toArray());
console.log(list.length);

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

