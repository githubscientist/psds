/*
    Strings are sequence of characters
    - the characters could be
        - alphabet (uppercase or lowercase)
        - numbers (0, 1, 2, 3, 4, 5, ..., 9)
        - symbols or special characters (!, @, #, $, %, ^, &, *)
*/

// let word = 'Apple';

// console.log(char, typeof char);

// to access a specific character from the string.
// console.log(char[4]);

// console.log(word.charAt(4));

// console.log(word.charCodeAt(1));

// Problem: Filter the uppercase characters and lowercase characters separately
// Input: 'ApPle'
// Output: 
// A P
// p l e

// let word = 'Ap8Pl1E';

// // create an array to store all the uppercase chars
// let uppercases = [];

// // create an array to store all the lowercase chars
// let lowercases = [];

// // create an array to store the numbers
// let numbers = [];

// iterate the string
// for (let i = 0; i < word.length; i++) {
//     console.log(word[i]);
// }

// for (let i in word) {
//     console.log(word[i]);
// }

// for (let char of word) {
//     console.log(char);
// }

// const isLowerCase = function (char) {
//     return char >= 'a' && char <= 'z';
// }

// const isUpperCase = function (char) {
//     return char >= 'A' && char <= 'Z'
// }

// const isLowerCase = (char) => {
//     return char >= 'a' && char <= 'z';
// }

// const isUpperCase = (char) => {
//     return char >= 'A' && char <= 'Z'
// }

// const isLowerCase = (char) => char >= 'a' && char <= 'z';

// const isUpperCase = (char) => char >= 'A' && char <= 'Z';

// const isLowerCase = char => char >= 'a' && char <= 'z';

// const isUpperCase = char => char >= 'A' && char <= 'Z';

// const isLowerCase = code => code >= 97 && code <= 122;

// const isUpperCase = code => code >= 65 && code <= 90;

// const isNumber = code => code >= 48 && code <= 57;

// for (let i = 0; i < word.length; i++) {
//     // check if the char is a lowercase char
//     if (isLowerCase(word.charCodeAt(i))) {
//         // if yes, push the char to the lowercases
//         lowercases.push(word.charAt(i));
//     } else if (isUpperCase(word.charCodeAt(i))) {
//         uppercases.push(word.charAt(i));
//     } else if (isNumber(word.charCodeAt(i))) {
//         numbers.push(word.charAt(i));
//     }
// }

// // print the lowercases and uppercases
// console.log(uppercases);
// console.log(lowercases);
// console.log(numbers);

// let numbers = [3, 4, 5, 6];

// numbers[0] = 13; // this would work as arrays are mutables

// console.log(numbers);

// let word = 'apple';

// word[1] = 'm'; // this would not work as strings are immutables
// word = 'ample'

// console.log(word.slice(2, 4));

// console.log(word.substring(2, 4));

// console.log(word.slice(-4, -2)); // the last five characters and ignores the last character

// let index = 1;
// let char = 'm';

// // word = word.slice(0, index) + char + word.slice(index + 1,);

// // let charArray = word.split('');

// // charArray[index] = char;

// // console.log(charArray.join(''));

// console.log(word.split('').map((ch, idx) => {
//     if (idx === index) {
//         return char;
//     }

//     return ch;
// }).join(''));

/*
    Problem: Find and print all the indices of the occurence of a character from a string.

    Input: 
    'apple is a fruit'
    a

    Output: [0, 9]

    Input: 

    'apple is a fruit'
    i

    Output: [6, 14]
*/

let sentence = 'apple is a fruit apple is a fruit appaapp';
let character = 'app';

let indices = [];
let index = 0;

// iterate the string and find the first occurence of the character
while (true) {
    index = sentence.indexOf(character, index);

    // if the index is not -1, then it means we have got an occurence
    if (index !== -1) {
        indices.push(index);
    } else {
        break;
    }

    index++;
}

console.log(indices);