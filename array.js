// let numbers = [2, 3, 4, 5];

// // console.log(numbers[4]);

// // console.log(numbers.length);

// // to get or access the last value from the array
// // console.log(numbers[numbers.length - 1]);

// numbers.push(7);
// numbers.push(10);

// numbers.pop();
// numbers.pop();

// // to the beginning of the array
// numbers.unshift(24);

// numbers.unshift(15);

// // remove element from the beginning of the array
// numbers.shift();
// numbers.shift();

// add or remove an element anywhere from the array
// numbers.splice(2, 0, 15);
// numbers.splice(1, 1);

// console.log(numbers.includes(40));

// console.log(numbers.indexOf(40));

// console.log(numbers.slice(1,));

// console.log(numbers);

// to square each of the number in the numbers array
// [4, 225, 16, 25]

// without map method
// let squares = [];

// for (let index = 0; index < numbers.length; index++) {
//     squares.push(numbers[index] ** 2);
// }

// console.log(squares);

// function squarer(value) {
//     return value ** 2;
// }

// // with map method
// console.log(numbers.map(squarer));

// with map method
// console.log(numbers.map(function (value) {
//     return value ** 2;
// }));

// console.log(numbers.map((value) => {
//     return value ** 2;
// }));

// console.log(numbers.map(value => value ** 2));

// console.log(numbers);

// let numbers = [2, 15, 4, 5];

// // To find the sum of all the numbers
// // without reduce method
// let sum = 0;

// for (let index = 0; index < numbers.length; index++) {
//     sum = sum + numbers[index];
// }

// console.log(sum);
// function sumReducer(previousValue, currentValue) {
//     console.log(previousValue, currentValue);
//     return previousValue + currentValue ** 2;
// }


// console.log(numbers.reduce(sumReducer, 0));

// Problem: given an array, remove the duplicates from the array
// input: [2, 3, 4, 5, 2, 3, 5, 6, 7, 5, 6, 7, 7, 4, 3]
// output: [2, 3, 4, 5, 6, 7]

// let numbers = [2, 3, 4, 5, 2, 3, 5, 6, 7, 5, 6, 7, 7, 4, 3];

// // method1: converting the array to a set datastructure
// // console.log(Array.from(new Set(numbers)));

// console.log(numbers.reduce((p, c) => {
//     // return the array with all the values from p and c
//     // only if the c is not in p
//     if (!p.includes(c)) {
//         return [...p, c];
//     } else {
//         return p;
//     }
// }, []));

// problem: Given an array of integers, find the frequency of each element in the array.
// input: [2, 3, 4, 5, 2, 3, 5, 6, 7, 5, 6, 7, 7, 4, 3]
/*
    output:

        2 - 2
        3 - 3
        4 - 2
        5 - 3
        6 - 2
        7 - 3
*/

// let numbers = [2, 3, 4, 5, 2, 3, 5, 6, 7, 5, 6, 7, 7, 4, 3];

// // create an empty object
// let frequencies = {};

// // iterate the numbers array and initialize the frequency of each of the element to 0
// for (let i = 0; i < numbers.length; i++) {
//     frequencies[numbers[i]] = 0;
// }

// for (let i = 0; i < numbers.length; i++) {
//     frequencies[numbers[i]]++;
// }

// // console.log(Object.entries(frequencies).map(sub => sub[0] + ' - ' + sub[1]).join('\n'));

// // console.log('[' + Object.keys(frequencies).join(', ') + ']');
// console.log(Object.keys(frequencies).map(num => parseInt(num)));

// Problem: Given an array of integers, find the first non - repeating element in the array.
// output: 7

// let numbers = [2, 3, 4, 5, 2, 3, 5, 7, 6, 5, 4, 3];

// let frequencies = {};

// for (let i = 0; i < numbers.length; i++) {
//     frequencies[numbers[i]] = 0;
// }

// for (let i = 0; i < numbers.length; i++) {
//     frequencies[numbers[i]]++;
// }

// // console.log(frequencies);
// // for (let key in frequencies) {
// //     if (frequencies[key] === 1) {
// //         console.log(key);
// //         break;
// //     }
// // }

// for (let i = 0; i < numbers.length; i++) {
//     if (frequencies[numbers[i]] === 1) {
//         console.log(numbers[i]);
//         break;
//     }
// }

/*
Problem: Given an array of integers, return the indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.

input: [2, 7, 11, 15], target = 9

output: [0, 1]

input: [3, 2, 4], target = 6

output: [1, 2]

input: [3, 3], target = 6

output: [0, 1]
*/

// sliding window technique

function removeAll(numbers, toRemove) {
    // if the element exists, then index will be returned
    // else -1 will be returned
    let nextIndex = numbers.indexOf(toRemove);

    while (nextIndex != -1) {
        // remove that occurence    
        numbers.splice(nextIndex, 1);

        // find the next occurence
        nextIndex = numbers.indexOf(toRemove, nextIndex + 1);
    }
}

let numbers = [1, 2, 3, 4, 5, 1, 2, 3, 1, 2, 3, 1, 2, 3];
let toRemove = 3;

// removeAll(numbers, toRemove);
numbers = numbers.filter(number => number !== toRemove);

console.log(numbers);
