/*
👉 Factorial Trailing Zeros

Given an integer n, return the number of trailing zeroes in n!.

Example 1:

Input: n = 3
Output: 0
Explanation: 3! = 6, no trailing zero.
Example 2:

Input: n = 5
Output: 1
Explanation: 5! = 120, one trailing zero.
Example 3:

Input: n = 0
Output: 0
*/

const trailingZeroes = function (n) {
  let numOfZeros = 0;
  while (n >= 5) {
    n = Math.floor(n / 5);
    numOfZeros += n;
  }
  return numOfZeros;
};

console.log(trailingZeroes(120));
console.log(trailingZeroes(5));
console.log(trailingZeroes(2));
console.log(trailingZeroes(78));

// To determine the number of trailing zeroes in the factorial of a number 𝑛, you need to count how many times the number 10 is a factor in the numbers from 1 to 𝑛. Since 10 is the product of 2 and 5, and there are usually more factors of 2 than factors of 5 in the factorial, you only need to count the factors of 5

// e.g. 120 = 120/5 = 24 -> 24/5 = 4
// 24 + 4 = 28
// Since, 4 is less than 5, there is no zero below it. So the output is 28 zeros.

// e.g. 78 = 78/5 = 15 -> 15/5 = 3
// 15 + 3 = 18
// Since, 3 is less than 5, there is no zero below it. So the output is 18 zeros.
