class Stack {
    constructor() {
        this.items = [];
        this.top = -1;
    }

    push(data) {
        this.items.push(data);
        this.top++;
    }

    isEmpty() {
        // should return true if the stack is empty
        // else it should return false
        return this.top === -1;
    }

    pop() {
        if (!this.isEmpty()) {
            // allow the deletion to happen
            this.items.pop();
            this.top--;
        }
    }
}

let stack = new Stack();

stack.push(3);
stack.push(5);
stack.push(8);

stack.pop();

console.log(stack);