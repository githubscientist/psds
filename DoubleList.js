class Node {
    constructor(data) {
        this.previous = null;
        this.data = data;
        this.next = null;
    }
}

class DoubleList {
    constructor() {
        this.head = null;
    }

    toArray() {
        const nodes = [];

        let thead = this.head;

        while (thead != null) {
            nodes.push(thead.data);
            thead = thead.next;
        }

        return nodes;
    }

    insertAtHead(data) {
        // create a new node
        let newNode = new Node(data);

        // check if the list is empty
        if (this.head === null) {
            // the list is empty
            this.head = newNode;
        } else {
            // the list is not empty
            newNode.next = this.head;

            this.head.previous = newNode;

            this.head = newNode;
        }
    }

    insertAtTail(data) {
        // create a new node
        let newNode = new Node(data);

        // check if the list is empty
        if (this.head === null) {
            this.head = newNode;
        } else {
            // define a dummy head
            let thead = this.head;

            // move the thead to the tail node
            while (thead.next != null) {
                thead = thead.next;
            }

            // now, after coming out of the loop
            // thead.next is null
            thead.next = newNode;
            newNode.previous = thead;
        }
    }
}

// create a new list
let dlist = new DoubleList();

dlist.insertAtHead(3);
dlist.insertAtHead(5);
dlist.insertAtHead(7);

dlist.insertAtTail(15);
dlist.insertAtTail(20);
dlist.insertAtTail(2);

console.log(dlist.toArray());