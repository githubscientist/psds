// searching: a process of checking whether a particular element exists in an iterable(set, map, array, string, json object)
/*
    1. Linear Search
    2. Binary Search
    3. Ternary Search
*/
// function linearSearch(numbers, key) {
//     // iterate the array numbers
//     for (let index = 0; index < numbers.length; index++) {
//         // for every number, check if the number matches the key
//         if (numbers[index] === key) {
//             // if yes, return true
//             return true;
//         }
//     }

//     // after we come out of the loop, if we cannot find any single match
//     // we reutrn false
//     return false;
// }

// function binarySearch(numbers, key) {
//     // place two pointers
//     let left = 0;
//     let right = numbers.length - 1;

//     while (left <= right) {
//         // calculate the middle index
//         // let middle = Math.floor((left + right) / 2);
//         let middle = Math.floor(left + (right - left) / 2);

//         // check if the value @ middle is equal to key
//         if (numbers[middle] === key) {
//             return true;
//         } else if (key > numbers[middle]) {
//             // update the left pointer
//             left = middle + 1;
//         } else {
//             // update the right pointer
//             right = middle - 1;
//         }
//     }

//     return false;
// }

function ternarySearch(numbers, key) {
    // place the pointers
    let left = 0;
    let right = numbers.length - 1;

    while (left <= right) {
        // find the middle indices <- mid1, mid2
        let mid1 = Math.floor(left + (right - left) / 3);
        let mid2 = Math.floor(right - (right - left) / 3);

        if (key === numbers[mid1] || key === numbers[mid2]) {
            return true;
        } else if (key < numbers[mid1]) {
            // the partition the key belongs to is left - mid1
            // which means we dont have to perform the search in any other partition
            // update the right index
            right = mid1 - 1;
        } else if (key > numbers[mid2]) {
            // the partition the key belongs to is mid2 - right
            // update the left index
            left = mid2 + 1;
        } else {
            // only one partition is left
            // mid1 - mid2
            // update both the left and right pointers
            left = mid1 + 1;
            right = mid2 - 1;
        }
    }

    return false;
}


let numbers = [3, 4, 2, 7, 6, 1, 5];

// to sort the array in ascending order
numbers.sort((a, b) => a - b);

// console.log(numbers.join(' '));

// console.log(numbers.includes(8));
// console.log(linearSearch(numbers, 8));
// console.log(binarySearch(numbers, 6));
// console.log(binarySearch(numbers, 8));

console.log(ternarySearch(numbers, 6));
console.log(ternarySearch(numbers, 8));