class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class CircularList {
    constructor() {
        this.head = null;
    }

    toArray() {
        let nodes = [];

        let thead = this.head;

        if (thead != null) {
            do {
                nodes.push(thead.data);
                thead = thead.next;
            } while (thead != null && thead != this.head);
        }

        return nodes;
    }

    insertAtHead(data) {
        let newNode = new Node(data);

        if (this.head === null) {
            this.head = newNode;
            newNode.next = this.head;
        } else {
            newNode.next = this.head;

            // find the tail node
            let tail = this.head;

            while (tail.next !== this.head) {
                tail = tail.next;
            }

            tail.next = newNode;
            this.head = newNode;
        }
    }

    insertAtTail(data) {
        let newNode = new Node(data);

        if (this.head === null) {
            this.head = newNode;
            newNode.next = this.head;
        } else {
            // find the tail node
            let tail = this.head;

            while (tail.next !== this.head) {
                tail = tail.next;
            }

            // tail.next is the head node
            tail.next = newNode;

            newNode.next = this.head;
        }
    }
}

let clist = new CircularList();

clist.insertAtHead(3);
clist.insertAtHead(5);
clist.insertAtHead(7);
clist.insertAtHead(10);

clist.insertAtTail(12);
clist.insertAtTail(15);

console.log(clist.toArray());