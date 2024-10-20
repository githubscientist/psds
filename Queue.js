class Queue {
    constructor() {
        this.items = [];
        this.front = -1;
        this.rear = -1;
    }

    isEmpty() {
        return this.front === -1 && this.rear === -1;
    }

    enqueue(data) {
        if (this.isEmpty()) {
            this.items.push(data);
            this.front = 0;
            this.rear = 0;
        } else {
            // queue has elements already
            this.items.push(data);
            this.rear++;
        }
    }

    dequeue() {
        if (!this.isEmpty()) {
            // should allow the dequeue
            // check if the queue has only one element
            if (this.front === 0 && this.rear === 0) {
                this.items.shift();
                this.front = this.rear = -1;
            } else {
                // queue has more than one element
                this.items.shift();
                this.rear--;
            }
        }
    }

    getFront() {
        if (!this.isEmpty()) {
            return this.items[this.front];
        }
    }

    getRear() {
        if (!this.isEmpty()) {
            return this.items[this.rear];
        }
    }
}

let queue = new Queue();

queue.enqueue(3);
queue.enqueue(5);
queue.enqueue(10);

queue.dequeue();
queue.dequeue();

console.log(queue);