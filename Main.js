/*
    Algorithm:

    1. Generate all the possible pairs from the array.
    2. For each of the generated pair, we should find the sum of the pair <- sumOfPair
    3. Compare the sumOfPair with the given target
    4. If they are equal, then find the indexes of the pair and return the pairs as an array.
*/

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
// });

// const userInput = [];

// rl.on('line', (line) => {
//     userInput.push(line);
// });

// rl.on('close', () => {
//     console.log(userInput);
// });

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
// });

// const userInput = [];

// rl.on('line', (line) => {
//     userInput.push(line);
// });

// rl.on('close', () => {
//     let numbers = userInput[0].split(' ').map(num => Number(num));
//     let target = Number(userInput[1]);

//     // 1. Generate all the possible pairs from the array.
//     for (let i = 0; i < numbers.length - 1; i++) {
//         for (let j = i + 1; j < numbers.length; j++) {
//             // 2. For each of the generated pair, we should find the sum of the pair < - pairSum
//             let pairSum = numbers[i] + numbers[j];

//             // 3. Compare the pairSum with the given target
//             if (pairSum === target) {
//                 // 4. If they are equal, then find the indexes of the pair and return the pairs as an array.
//                 console.log([i, j]);
//                 break;
//             }
//         }
//     }
// });

// Two pointer technique
/*

    Problem: Given a String, we need to check whether it is a palindrome or not.

    Input: madam
    Output: Yes

    Input: hello
    Output: No

    Input: malayalam
    Output: Yes

*/
// function isPalindrome(word) {
//     // set the two pointers
//     let start = 0;
//     let end = word.length - 1;

//     while (start < end) {
//         // compare and check whether the chars at start and end are equal
//         if (word[start] !== word[end]) {
//             return 'No';
//         }

//         // if they are equal
//         // check for the next pair of chars
//         // update the pointers
//         start++;
//         end--;
//     }

//     // when we reach here, it means, no mismatch of chars is found
//     // the string is a palindrome
//     return 'Yes';
// }


// console.log(isPalindrome('madam')); // Yes
// console.log(isPalindrome('hello')); // No
// console.log(isPalindrome('malayalam')); // Yes

// Problem: Reverse an array

// function reverse(numbers) {
//     // set the pointers
//     let start = 0;
//     let end = numbers.length - 1;

//     while (start < end) {
//         // swap the numbers at start and end
//         let temp = numbers[start];
//         numbers[start] = numbers[end];
//         numbers[end] = temp;

//         // update the pointers
//         start++;
//         end--;
//     }
// }

// let numbers = [4, 3, 7, 2, 1];

// reverse(numbers);

// console.log(numbers);

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
// });

// const userInput = [];

// rl.on('line', (line) => {
//     userInput.push(line);
// });

// rl.on('close', () => {
//     let numbers = userInput[0].split(' ').map(num => Number(num));
//     let target = Number(userInput[1]);

//     // preserve the original indices of the array elements
//     let idxNumbers = numbers.map((num, idx) => [num, idx]);

//     // sort the given array
//     idxNumbers.sort((a, b) => a[0] - b[0]);

//     // set the two pointers
//     let start = 0;
//     let end = idxNumbers.length - 1;

//     while (start < end) {
//         if (idxNumbers[start][0] + idxNumbers[end][0] === target) {
//             console.log([idxNumbers[start][1], idxNumbers[end][1]]);
//             break;
//         }
//         // if the sum is not equal, check if the sum is greater than target or lesser than target
//         else if (idxNumbers[start][0] + idxNumbers[end][0] > target) {
//             end--;
//         } else if (idxNumbers[start][0] + idxNumbers[end][0] < target) {
//             start++;
//         }
//     }
// });