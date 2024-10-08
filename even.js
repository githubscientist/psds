// function isEven(number) {
//     // 2. Find the remainder of the number when divided by 2
//     let remainder = number % 2;

//     // 3. Check if the remainder is 0, then the number is even
//     if (remainder === 0) {
//         console.log('Even');
//     } else {
//         // 4. Else If the remainder is 1, then the number is odd
//         console.log('Odd');
//     }
// }

// function isEven(number) {
//     // 2. Find the last digit of the number
//     let lastDigit = number % 10;

//     // 3. Check if the last digit is 0, 2, 4, 6, or 8, then the number is even
//     if (lastDigit === 0 || lastDigit === 2 || lastDigit === 4 || lastDigit === 6 || lastDigit === 8) {
//         console.log('Even');
//     } else {
//         // 4. Else if the last digit is 1, 3, 5, 7, or 9, then the number is odd
//         console.log('Odd');
//     }
// }

// function isEven(number) {
//     // 2. Find the last digit of the number
//     let lastDigit = number % 10;

//     // 3. Check if the last digit is 0, 2, 4, 6, or 8, then the number is even
//     // if (lastDigit === 0 || lastDigit === 2 || lastDigit === 4 || lastDigit === 6 || lastDigit === 8) {
//     //     console.log('Even');
//     // } else {
//     //     // 4. Else if the last digit is 1, 3, 5, 7, or 9, then the number is odd
//     //     console.log('Odd');
//     // }

//     // if (Array(0, 2, 4, 6, 8).includes(lastDigit)) {
//     //     console.log('Even');
//     // } else {
//     //     // 4. Else if the last digit is 1, 3, 5, 7, or 9, then the number is odd
//     //     console.log('Odd');
//     // }

//     switch (lastDigit) {
//         case 0:
//         case 2:
//         case 4:
//         case 6:
//         case 8:
//             console.log('Even');
//             break;
//         default:
//             console.log('Odd');
//     }
// }

// function isEven(number) {
//     // 2. Find the last digit of the number
//     let lastDigit = number[number.length - 1];

//     // 3. Check if the last digit is 0, 2, 4, 6, or 8, then the number is even
//     if ('02468'.includes(lastDigit)) {
//         console.log('Even');
//     } else {
//         // 4. Else if the last digit is 1, 3, 5, 7, or 9, then the number is odd
//         console.log('Odd');
//     }
// }

// isEven('5');
// isEven('34');
// isEven('230');
// isEven('655767');

// function isEven(number) {
//     // 2. Generate the numbers starting from 0 and keep adding by 2 until either the number is equal to the input number or greater than the input number
//     let evens;
//     for (evens = 0; evens < number; evens += 2);

//     // 3. If the final number is equal to the input number, then the number is even
//     if (evens === number) {
//         console.log('Even');
//     } else {
//         // 4. Else the number is odd
//         console.log('Odd');
//     }
// }

// function isEven(number) {
//     // 2. Subtract the number by 2 until the number is less than 2
//     for (; number >= 2; number -= 2);

//     // 3. If the number is 0, then the number is even
//     if (number === 0) {
//         console.log('Even');
//     } else {
//         // 4. Else the number is odd
//         console.log('Odd');
//     }
// }

// function isEven(number) {
//     // 2. Subtract the number by 2 until the number is less than 2
//     while (number >= 2) {
//         number -= 2
//     }

//     // 3. If the number is 0, then the number is even
//     if (number === 0) {
//         console.log('Even');
//     } else {
//         // 4. Else the number is odd
//         console.log('Odd');
//     }
// }

// function isEven(number) {
//     // 2. Subtract the number by 2 until the number is less than 2
//     do {
//         number -= 2
//     } while (number >= 2);

//     // 3. If the number is 0, then the number is even
//     if (number === 0) {
//         console.log('Even');
//     } else {
//         // 4. Else the number is odd
//         console.log('Odd');
//     }
// }

// function isEven(number) {
//     // 2. Convert the number to binary representation
//     let binary = number.toString(2);

//     let lastBit = binary[binary.length - 1];

//     // 3. Check the last bit of the binary representation, if it is 0, then the number is even
//     if (lastBit === '0') {
//         console.log('Even');
//     } else {
//         // 4. Else the number is odd
//         console.log('Odd');
//     }
// }

function isEven(number) {
    // 3. Check the last bit of the binary representation, if it is 0, then the number is even
    if (number & 1) {
        console.log('Odd');
    } else {
        // 4. Else the number is odd
        console.log('Even');
    }
}

isEven(5);
isEven(34);
isEven(230);
isEven(655767);
isEven(4);