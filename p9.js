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

    for (let row = 1, odd = 1; row <= n; row++, odd += 2) {
        // for every line
        let line = [];

        // hanlding the spaces
        // n = 5
        // 4 3 2 1 0
        for (let space = 1; space <= n - row; space++) {
            line.push(' ');
        }

        // starting from the row number to the odd number (++)
        for (let number = row; number <= odd; number++) {
            line.push(number);
        }

        // another loop that starts from odd number-1 and ends at row number (--)
        for (let number = odd - 1; number >= row; number--) {
            line.push(number);
        }

        console.log(line.join(''));
    }
});