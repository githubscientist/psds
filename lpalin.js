// // total time complexity, T(n) = O(n^3)

// O(n/2) => O(n)
// function isPalindrome(word) {
//     let s = 0;
//     let e = word.length - 1;

//     while (s < e) {
//         if (word[s] != word[e]) return false;
//         s++;
//         e--;
//     }

//     return true;
// }

// function findLongestPalindrome(word) {
//     let palindromes = [];

//     // find all the possible substrings
//     // Outer loop: O(n)
//     for (let i = 0; i < word.length; i++) {
//         // Inner loop: O(n)
//         for (let j = i; j < word.length; j++) {
//             // window is i to j
//             // substring: word.slice(i, j + 1)
//             // check whether any of the substrings are palindrome
//             // O(n)
//             if (isPalindrome(word.slice(i, j + 1))) {
//                 palindromes.push(word.slice(i, j + 1));
//             }
//         }
//     }
//     let maxLength = Math.max(...(palindromes.map(s => s.length)));
//     return palindromes.filter(s => s.length === maxLength).join(', ');
// }

// O(N^2)
function expandFromCenter(word, left, right) {
    let start = left;
    let end = right;
    while (word[left] === word[right] && left >= 0 && right < word.length) {
        // we have got our palindrome
        start = left;
        end = right;

        left--;
        right++;
    }

    return word.slice(start, end + 1);
}


function findLongestPalindrome(word) {
    let palindromes = [];
    for (let i = 0; i < word.length; i++) {
        let oddLengthWord = expandFromCenter(word, i, i);
        let evenLengthWord = '';
        if (word[i] === word[i + 1]) {
            evenLengthWord = expandFromCenter(word, i, i + 1);
        }

        if (oddLengthWord.length > evenLengthWord.length) {
            palindromes.push(oddLengthWord);
        } else {
            palindromes.push(evenLengthWord);
        }
    }
    let maxLength = Math.max(...(palindromes.map(s => s.length)));
    return palindromes.filter(s => s.length === maxLength).join(', ');
}

console.log(findLongestPalindrome("babad")) // "bab", "aba"
console.log(findLongestPalindrome("cbbd")) // "bb"
console.log(findLongestPalindrome("a")) // "a"
console.log(findLongestPalindrome("ac")) // "a", "c"
console.log(findLongestPalindrome("racecar")) // "racecar"
console.log(findLongestPalindrome("abbcdedcbaabbaabaccab")) // baabbaab