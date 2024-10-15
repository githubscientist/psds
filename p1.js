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
    const n = Number(userInput[0]);

    for (let row = 1; row <= n; row++) {
        let stars = [];
        for (let cols = 1; cols <= n - row + 1; cols++) {
            stars.push('*');
        }
        console.log(stars.join('  '));
    }
});