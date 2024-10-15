// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
    input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () => {
    let n = Number(userInput[0]);

    // print n lines
    for (let row = 1; row <= n; row++) {
        let lines = [];

        // create a loop that runs for n - row times
        for (let spaces = 1; spaces <= n - row; spaces++) {
            lines.push(' ');
        }

        // create a loop that runs for row times
        for (let stars = 1; stars <= row; stars++) {
            lines.push('*');
        }

        console.log(lines.join(''));
    }
});