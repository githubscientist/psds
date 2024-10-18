/*
    Problem: Count the number of 1's in a sorted binary array.

    Input: [0, 0, 0, 1, 1, 1, 1]
    Output: 4

    Input: [1, 1, 1, 1, 1]
    Output: 5

    Input: [0, 0, 0, 0, 1]
    Output: 1

    Input: [0, 0, 0, 0, 0]
    Output: 0
*/

function lsCountOnes(numbers) {
    // place the pointers
    let l = 0;
    let r = numbers.length - 1;

    while (l <= r) {
        // find the mid index
        let m = Math.floor((l + r) / 2);

        if (numbers[m] === 1 && numbers[m - 1] === 0) {
            // check whether the middle value is 1 and the previous value to middle is 0
            return m;
        } else if (numbers[m] === 0 && numbers[m + 1] === 1) {
            // check whether the middle value is 0 and the next value to middle is 1
            return m + 1;
        } else if (numbers[m] === 1 && numbers[m - 1] === 1) {
            // check whether the middle value is 1 and the previous value to middle is also 1
            r = m - 1;
        } else if (numbers[m] === 0 && numbers[m + 1] === 0) {
            // check whether the middle value is 0 and the next value to middle is 0
            l = m + 1;
        } else if (numbers[m] === 0 && m === numbers.length - 1) {
            // check if the m index reached the last index and it happened to be 0
            return -1;
        } else if (numbers[m] === 1 && m === 0) {
            // checking if the m index reached the first index and it happened to be 1
            return 0;
        }
    }
}
let numbers = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

let firstIndexOfOne = lsCountOnes(numbers);

// console.log(firstIndexOfOne === -1 ? 0 : numbers.length - firstIndexOfOne);