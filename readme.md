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
6. given a number, convert the number into its binary without using library function.
7. Given two numbers, find the GCD of the numbers.
8. Given two numbers, find the LCM of the numbers.
9. Given a number N, find the sum of first N natural numbers.
10. Given a number, check whether the number is a Fibonacci or not.
