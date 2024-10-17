// Built In Sort Method
// let numbers = [34, 7, 310, 2, 4, 6, 5, 1, 11, 20, 35];

// const compareFn = (a, b) => {
//     if (a < b) {
//         return -1;
//     } else if (a === b) {
//         return 0;
//     } else {
//         return 1;
//     }
// }

// const compareFn = (a, b) => {
//     if (a < b) {
//         return 1;
//     } else if (a === b) {
//         return 0;
//     } else {
//         return -1;
//     }
// }

// numbers.sort((a, b) => b - a);

// let numbers = [[2, 5], [6, 1], [3, 2], [8, 10]];

// numbers.sort((a, b) => a[1] - b[1]);

// console.log(numbers);

// let word = 'aquickbrownfoxjumpedoverthelazydog';

// let charsArray = word.split('');

// charsArray.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));

// console.log(charsArray.join(''));

// let words = ['apple', 'ant', 'ankle', 'aim', 'and', 'angry'];

// words.sort();

// console.log(words);

// Sorting Algorithms
// Bubble Sort
// function bubbleSort(numbers) {
//     let passes = 0;

//     // iterate the array
//     // pass 1
//     for (let j = 0; j < numbers.length; j++) {
//         let swaps = 0;
//         for (let i = 0; i < numbers.length; i++) {
//             // for every pair at (i, i+1)
//             // if the value at i is > value at i+1
//             if (numbers[i] > numbers[i + 1]) {
//                 // do a swap
//                 let temp = numbers[i];
//                 numbers[i] = numbers[i + 1];
//                 numbers[i + 1] = temp;

//                 swaps++;
//             }
//         }
//         passes++;

//         if (swaps === 0) {
//             break;
//         }
//     }

//     console.log(passes);
// }


// let numbers = [4, 3, 1, 7, 2, 6, 5];

// bubbleSort(numbers);

// console.log(numbers);

// Problem: Find the second laregest element from the given array

// let numbers = [4, 3, 1, 7, 2, 6, 5, 8, 10, 12];

// let times = 2;

// while (times--) {
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] > numbers[i + 1]) {
//             // numbers[i] = numbers[i] + numbers[i + 1];
//             // numbers[i + 1] = numbers[i] - numbers[i + 1];
//             // numbers[i] = numbers[i] - numbers[i + 1];

//             // let temp = numbers[i];
//             // numbers[i] = numbers[i + 1];
//             // numbers[i + 1] = temp;

//             numbers[i] = numbers[i] ^ numbers[i + 1];
//             numbers[i + 1] = numbers[i] ^ numbers[i + 1];
//             numbers[i] = numbers[i] ^ numbers[i + 1];
//         }
//     }
// }

// console.log(numbers[numbers.length - 2]);

// Problem: Finding the kth largest element, given an array and a value k. If it's not possible to find kth largest element, print -1.

// let numbers = [3, 6, 1, 2, 5, 4, 7];
// let k = 8;
// let times = k;

// if (k > numbers.length) {
//     console.log(-1);
// } else {
//     while (times--) {
//         for (let i = 0; i < numbers.length; i++) {
//             if (numbers[i] > numbers[i + 1]) {
//                 // numbers[i] = numbers[i] + numbers[i + 1];
//                 // numbers[i + 1] = numbers[i] - numbers[i + 1];
//                 // numbers[i] = numbers[i] - numbers[i + 1];

//                 // let temp = numbers[i];
//                 // numbers[i] = numbers[i + 1];
//                 // numbers[i + 1] = temp;

//                 numbers[i] = numbers[i] ^ numbers[i + 1];
//                 numbers[i + 1] = numbers[i] ^ numbers[i + 1];
//                 numbers[i] = numbers[i] ^ numbers[i + 1];
//             }
//         }
//     }

//     console.log(numbers[numbers.length - k]);
// }

// Selection Sort

// let numbers = [3, 6, 1, 2, 5, 4, 7];

// function findMinIndex(numbers, start, end) {
//     let min = numbers[start];
//     let minIndex = start;

//     for (let i = start + 1; i <= end; i++) {
//         if (numbers[i] < min) {
//             // update the minimum value and its index
//             min = numbers[i];
//             minIndex = i;
//         }
//     }

//     return minIndex;
// }

// for (let i = 0; i < numbers.length; i++) {
//     let minIndex = findMinIndex(numbers, i, numbers.length - 1);

//     // swap the elements at i, minIndex
//     let temp = numbers[i];
//     numbers[i] = numbers[minIndex];
//     numbers[minIndex] = temp;
// }

// console.log(numbers.join(' '));

// Insertion Sort
// let numbers = [3, 6, 1, 2, 8, 5, 4, 7];
// let box;
// let temp;
// let i, j;

// for (i = 0; i < numbers.length; i++) {
//     box = i;
//     temp = numbers[box];

//     for (j = i - 1; j >= 0; j--) {
//         if (temp > numbers[j]) {
//             break;
//         } else {
//             // do a shift
//             numbers[box] = numbers[j];
//             box = j;
//         }
//     }

//     numbers[box] = temp;
// }

// console.log(numbers);


// Counting Sort
// let numbers = [3, 6, 1, 2, 8, 5, 4, 7, 3, 6, 2];

// let frequency = {};

// for (let i = 0; i < numbers.length; i++) {
//     frequency[numbers[i]] = 0;
// }

// for (let i = 0; i < numbers.length; i++) {
//     frequency[numbers[i]]++;
// }

// console.log(frequency);

// numbers = Object.entries(frequency).map(sub => {
//     let values = [];
//     while (sub[1]--) {
//         values.push(sub[0]);
//     }
//     return values;
// }).reduce((p, q) => [...p, ...q], []).map(num => Number(num))

// console.log(numbers);

