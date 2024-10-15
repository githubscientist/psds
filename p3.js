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
    let [rows, cols] = userInput[0].split(' ').map(num => Number(num));

    for (let row = 1; row <= rows; row++) {
        let lines = [];

        if (row === 1 || row === rows) {
            for (let col = 1; col <= cols; col++) {
                lines.push('*');
            }
        } else {
            // for all the rows except first row and last row
            // row != 1 and row != rows
            for (let col = 1; col <= cols; col++) {
                if (col === 1 || col === cols) {
                    lines.push('*');
                } else {
                    lines.push(' ');
                }
            }
        }

        console.log(lines.join(' '));
    }
});