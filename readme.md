# Problem Solving Techniques

Problem: Given a number, check whether it is an even number or an odd number.

Input: 5
Output: Odd

Input: 6
Output: Even

Algorithm 1: Divisibility by 2

1. Get the input number
2. Find the remainder of the number when divided by 2
3. If the remainder is 0, then the number is even
4. If the remainder is 1, then the number is odd

Algorithm 2: Last digit

1. Get the input number
2. Find the last digit of the number
3. Check if the last digit is 0, 2, 4, 6, or 8, then the number is even
4. Else if the last digit is 1, 3, 5, 7, or 9, then the number is odd

Algorithm 3: Use the table of 2

1. Get the input number
2. Generate the numbers starting from 2 and keep multiplying by 2 until either the number is equal to the input number or greater than the input number
3. If the final number is equal to the input number, then the number is even
4. Else the number is odd

Algorithm 4: Subtract by 2

1. Get the input number
2. Subtract the number by 2 until the number is less than 2
3. If the number is 0, then the number is even
4. Else the number is odd

Algorithm 5: Binary Representation

1. Get the input number
2. Convert the number to binary representation
3. Check the last bit of the binary representation, if it is 0, then the number is even
4. Else the number is odd

Problem: Given two numbers, check whether they are amicable numbers or not.

Input: 220, 284
Output: Amicable

Input: 1184, 1210
Output: Amicable

Explanation: The sum of the proper divisors of 220 is 284 and the sum of the proper divisors of 284 is 220. Similarly, the sum of the proper divisors of 1184 is 1210 and the sum of the proper divisors of 1210 is 1184.

Factors of 220 => 1, 2, 4, 5, 10, 11, 20, 22, 44, 55, 110
Sum of factors of 220 = 284

Factors of 284 => 1, 2, 4, 71, 142
Sum of factors of 284 = 220

Algorithm:

1. Get the input numbers <- A, B
2. Find the proper divisors of A and sum them <- sumA
3. Find the proper divisors of B and sum them <- sumB
4. If sumA = B and sumB = A, then the numbers are amicable
5. Else the numbers are not amicable

Homeworks:

1. Given a number, check whether it is a prime number or not.
2. Given a number, check whether it is a perfect number or not.
3. Given a number, check whether it is a palindrome number or not.
4. Given a number, check whether it is an Armstrong number or not.
5. Given two numbers, check whether they are amicable numbers or not.
6. Given a number, convert the number into its binary without using library function.
7. Given two numbers, find the GCD of the numbers.
8. Given two numbers, find the LCM of the numbers.
9. Given a number N, find the sum of first N natural numbers.
10. Given a number, check whether the number is a Fibonacci or not.

Problem: Given two numbers, find the GCD of the numbers.

Problems based around duplicates and frequency of elements in an array.

Homeworks:

- Given an array of integers, find the frequency of each element in the array.
- Given an array of integers, find the number of duplicates in the array.
- Given an array of integers, find the number of unique elements in the array.
- Given an array of integers, remove the duplicates from the array.
- Given an array of integers, find the first non-repeating element in the array.
- Given an array of integers, find the first repeating element in the array.
- Given an array of integers, find the maximum frequency of an element in the array.
- Given an array of integers, find the minimum frequency of an element in the array.
- Given a string, find the frequency of each character in the string and print as like 'a2b3c4d5'.
- Given a string, find the first non-repeating character in the string.
- Given a string, find the first repeating character in the string.
- Given two arrays, find the common elements between the arrays.

Technique: Hashing

Technique: Two Pointer Technique

Homeworks:

1. Given an array of integers, find the maximum sum of subarray.

Input: [1, 2, 3, -2, 5]
Output: 9

Input: [-2, -3, 4, -1, -2, 1, 5, -3]
Output: 7

2. Given an array of integers, find the maximum product of subarray.

Input: [2, 3, -2, 4]
Output: 6

Input: [-2, 0, -1]
Output: 0

3. Given a sorted array, remove the duplicates from the array.

Input: [1, 1, 2]
Output: [1, 2]

Input: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
Output: [0, 1, 2, 3, 4]

4. Given an array with 0's and non-zero integers, move all 0's to the end of the array while maintaining the relative order of the non-zero integers.

Input: [0, 1, 0, 3, 12]
Output: [1, 3, 12, 0, 0]

Input: [0, 0, 0, 1, 2, 3]
Output: [1, 2, 3, 0, 0, 0]

Technique: Sliding Window Technique

## Time Complexities

In a situation where we have to compare two algorithms and say which one is better, we use the performance factors.

the performance factors are:

1. Time Complexity: The amount of time taken by an algorithm to run as a function of the length of the input.

2. Space Complexity: The amount of memory taken by an algorithm to run as a function of the length of the input.

In order to denote mathematically the time complexity or space complexity of an algorithm, we use Asymptotic Notation.

Asymptotic Notation is a mathematical notation that helps us to denote the time complexity or space complexity of an algorithm.

The Asymptotic Notation is divided into three types:

1. Big O Notation:

   - upper bound
   - worst-case

2. Omega Notation:

   - lower bound
   - best-case

3. Theta Notation:
   - tight bound
   - average-case

Example to understand the different cases:

Algorithm 1: Linear Search

1. Get the input array and the element to be searched
2. Traverse through the array starting from the first element
3. For each element in the array, we compare the element with the element to be searched
4. If the element is found, then return the index of the element
5. After coming out of the loop, if the element is not found, then return -1

Input:

A = [1, 2, 3, 4, 5]
Key = 1
Situtation: The element we are searching is the first element in the array

comparisons = 1
Best Case: O(1)

A = [1, 2, 3, 4, 5]
Key = 3
Situtation: The element we are searching is the middle element in the array

comparisons = 3
Average Case: O(n/2)

A = [1, 2, 3, 4, 5]
Key = 5
Situtation: The element we are searching is the last element in the array or the element is not present in the array

comparisons = 5
Worst Case: O(n)

Key Takeaway:

- We consider the worst-case time complexity of an algorithm because it gives us the upper bound of the time taken by the algorithm to run.
- We use the Big O Notation to denote the worst-case time complexity of an algorithm.

Examples:

```javascript
let n, m;

for (let i = 0; i < n; i++) {
  let rNumber = Math.random();
}

for (let i = 0; i < n; i++) {
  let rNumber = Math.random();
}
```

What is the time complexity of the above code?

options:

a. O(1)
b. O(log n)
c. O(n)
d. O(n^2)
e. O(n log n)
f. O(n^3)
g. O(2^n)
h. O(n!)

Solution:

```javascript
let n, m;
```

Executions: 1 (declarations, assignments, initializations, decision making statement, increment)

```javascript
for (let i = 0; i < n; i++) {
  let rNumber = Math.random();
}
```

Executions: n

```javascript
for (let i = 0; i < m; i++) {
  let rNumber = Math.random();
}
```

Executions: m

Total Time Complexity = 1 + n + m
= n + m [Ignoring the constant term]
= O(n + m)

Therefore, the time complexity of the above code is O(n + m).

```javascript
let n, m;

for (let i = 0; i < n; i++) {
  let rNumber = Math.random();
  for (let j = 0; j < n; j++) {
    let rNumber = Math.random();
  }
}
```

Solution:

1. Assume some random values for n

n = 4
n = 5
n = 6

2. Find the number of executions for the assumptions

n = 4,

    i = 0; j = 0, 1, 2, 3; executions = 4
    i = 1; j = 0, 1, 2, 3; executions = 4
    i = 2; j = 0, 1, 2, 3; executions = 4
    i = 3; j = 0, 1, 2, 3; executions = 4

    total executions = 4 + 4 + 4 + 4 = 16

n = 5,

        i = 0; j = 0, 1, 2, 3, 4; executions = 5
        i = 1; j = 0, 1, 2, 3, 4; executions = 5
        i = 2; j = 0, 1, 2, 3, 4; executions = 5
        i = 3; j = 0, 1, 2, 3, 4; executions = 5
        i = 4; j = 0, 1, 2, 3, 4; executions = 5

        total executions = 5 + 5 + 5 + 5 + 5 = 25

n = 6,

            i = 0; j = 0, 1, 2, 3, 4, 5; executions = 6
            i = 1; j = 0, 1, 2, 3, 4, 5; executions = 6
            i = 2; j = 0, 1, 2, 3, 4, 5; executions = 6
            i = 3; j = 0, 1, 2, 3, 4, 5; executions = 6
            i = 4; j = 0, 1, 2, 3, 4, 5; executions = 6
            i = 5; j = 0, 1, 2, 3, 4, 5; executions = 6

            total executions = 6 + 6 + 6 + 6 + 6 + 6 = 36

3. Summarize the assumed n and the number of executions and find the pattern

n = 4, executions = 16
n = 5, executions = 25
n = 6, executions = 36

executions = n^2

4. Calculate the total time complexity

T(n)
= 1 + n^2
= O(n^2)

```javascript
let n;

for (let i = 0; i < n; i++) {
  let rNumber = Math.random();
  for (let j = 0; j < i; j++) {
    let rNumber = Math.random();
  }
}
```

1. Assume some random values for n

n = 4
n = 5
n = 6

2. Find the number of executions for the assumptions

n = 4,

    i = 0; j = 0; executions = 1
    i = 1; j = 0, 1; executions = 2
    i = 2; j = 0, 1, 2; executions = 3
    i = 3; j = 0, 1, 2, 3; executions = 4

    total executions = 1 + 2 + 3 + 4 = 10

n = 5,

    i = 0; j = 0; executions = 1
    i = 1; j = 0, 1; executions = 2
    i = 2; j = 0, 1, 2; executions = 3
    i = 3; j = 0, 1, 2, 3; executions = 4
    i = 4; j = 0, 1, 2, 3, 4; executions = 5

    total executions = 1 + 2 + 3 + 4 + 5 = 15

n = 6,

    i = 0; j = 0; executions = 1
    i = 1; j = 0, 1; executions = 2
    i = 2; j = 0, 1, 2; executions = 3
    i = 3; j = 0, 1, 2, 3; executions = 4
    i = 4; j = 0, 1, 2, 3, 4; executions = 5
    i = 5; j = 0, 1, 2, 3, 4, 5; executions = 6

    total executions = 1 + 2 + 3 + 4 + 5 + 6 = 21

3. Summarize the assumed n and the number of executions and find the pattern

n = 4, executions = 10
n = 5, executions = 15
n = 6, executions = 21

4. Calculate the total time complexity

T(n) = 1 + (n \* (n+1))/2

```javascript
let n;

for (let i = 1; i <= n; i++) {
  let rNumber = Math.random();
  for (let j = 1; j <= n; j *= 2) {
    let rNumber = Math.random();
  }
}
```

1. Assume some random values for n

n = 10
n = 20
n = 30

2. Find the number of executions for the assumptions

n = 10, j = 1, 2, 4, 8; executions = 4
n = 20, j = 1, 2, 4, 8, 16; executions = 5
n = 30, j = 1, 2, 4, 8, 16; executions = 5
n = 40, j = 1, 2, 4, 8, 16, 32; executions = 6

Problem: Given an array of integers, find and print all the combinations of the elements in the array.

Input: [1, 2]
Output: [1], [2], [1, 2], []

Input: [1, 2, 3]
Output: [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3], []

Input: [1, 2, 3, 4]
Output: [1], [2], [3], [4], [1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4], [1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4], [1, 2, 3, 4], []

Problem: Given a string, find and print all the permutations of the characters in the string.

Input: "ab"
Output: "ab", "ba"

Input: "abc"
Output: "abc", "acb", "bac", "bca", "cab", "cba"

Input: "abcd"
Output: "abcd", "abdc", "acbd", "acdb", "adbc", "adcb", "bacd", "badc", "bcad", "bcda", "bdac", "bdca", "cabd", "cadb", "cbad", "cbda", "cdab", "cdba", "dabc", "dacb", "dbac", "dbca", "dcab", "dcba"

Day 1: Problem Solving
Day 2: Arrays - Basic Problems
Day 3: Arrays - Intermediate Problems - Advanced Problems
Day 4: Time Complexity - Asymptotic Notation
Day 5: Patterns + Strings - Basic Problems
Day 6: Strings - Intermediate Problems - Advanced Problems + Recursion
Day 7: Sorting Algorithms
Day 8: Searching Algorithms
Day 9: Linked List - Singly, Doubly, Circularly
Day 10: Stacks and Queues

# Strings - Basic Problems (Homeworks)

1. Given a string, find the length of the string.
2. Given a string, find the number of vowels in the string.
3. Given a string, find the number of consonants in the string.
4. Given a string, find the number of words in the string.
5. Given a string, check whether the string is a palindrome or not.
6. Given two strings, check whether the strings are anagrams or not.
7. Given a string, find the first non-repeating character in the string.
8. Given a string, find the first repeating character in the string.
9. Given a string, print the characters at odd positions and even positions separately.
10. Given a string, find the maximum frequency of a character in the string.
11. Given a string, find the minimum frequency of a character in the string.
12. Given a string, find the frequency of each character in the string and print as like 'a2b3c4d5'.
13. Given a string and a character, find the frequency of the character in the string.
14. Given a string and an index, remove the character at the given index from the string.
15. Given a string, remove the duplicates from the string.
16. Given a string, reverse the string.
17. Given a string, reverse the words in the string.
18. Given a string, find the maximum length of a substring without repeating characters.
19. Given a string, find the longest palindrome substring in the string.

# Recursion Techniques

Recursion is a technique in which a function calls itself to solve a problem.

Given a string, find the longest palindrome substring in the string. If there are multiple palindrome substrings with the same length, then print all the palindrome substrings.

Input: "babad"
Output: "bab", "aba"

Input: "cbbd"
Output: "bb"

Input: "a"
Output: "a"

Input: "ac"
Output: "a", "c"

Input: "racecar"
Output: "racecar"

Input: "abbcdedcbaabbaabaccab"
Output: baabbaab

Palindromes in the input string are:

ded
cdedc
baabbaab
aabbaa
abba
bb
aba
baccab
acca
cc
a
b
c
d

substrings of racecar:

r
ra
rac
race
racec
raceca
racecar
a
ac
ace
acec
aceca
acecar
c
ce
cec
ceca
cecar
e
ec
eca
ecar
c
ca
car
a
ar
r

# Sorting Algorithms

Sorting is the process of arranging the elements in a list in a specific order.

- Bubble Sort
- Selection Sort
- Insertion Sort
- Counting Sort

HomeWorks:

1. Modify the bubble sort algorithm to stop the sorting process if the elements are already sorted.
2. Find the kth largest element in an array using the bubble sort algorithm.
3. Given a nearly sorted array (each eleemnt is at most k positions away from its sorted position), sort the array using the insertion sort algorithm.
4. Given two unsorted arrays, merge the arrays into a single array.
5. Given two unsorted arrays, find the median of the arrays.
6. Given an unsorted array, find the pair of elements with the minimum difference.
