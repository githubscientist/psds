// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

// function findIndex(words) {
//     for (let index = 0; index < words.length - 1; index++) {
//         if (words[index] === words[index + 1]) {
//             return index;
//         }
//     }

//     return -1;
// }

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

    peek() {
        if (!this.isEmpty()) {
            return this.items[this.top];
        }
    }
}

inp.on("close", () => {
    let words = userInput[0].split(' ');

    // // iteratively scan the list of words
    // while (true) {
    //     let index = findIndex(words);

    //     if (index === -1) {
    //         break;
    //     }

    //     // delete the two same words that exists together
    //     words.splice(index, 2);
    // }

    // if (words.length > 0) {
    //     console.log(words.join(' '));
    // } else {
    //     console.log(-1);
    // }

    // create a new stack
    let stack = new Stack();

    for (let index = 0; index < words.length; index++) {
        // check if the stack is empty
        if (stack.isEmpty()) {
            stack.push(words[index]);
        } else {
            // stack is not empty
            // check if the top of the stack and the current word are equal
            if (stack.peek() === words[index]) {
                // when the words are equal
                // we should not push the current word
                // delete the top of the stack
                stack.pop();
            } else {
                // the words are not equal
                stack.push(words[index]);
            }
        }
    }

    if (stack.isEmpty()) {
        console.log(-1);
    } else {
        console.log(stack.items.join(' '));
    }
});