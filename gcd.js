function findGCD(num1, num2) {
    while (true) {
        // find the remainder
        let rem = num1 % num2;

        if (rem === 0) break;

        // re-assign the values of num1 and num2
        num1 = num2;
        num2 = rem;
    }

    // what we have in num2 is GCD
    return num2;
}

let num1 = 60;
let num2 = 28;

console.log(findGCD(num1, num2));