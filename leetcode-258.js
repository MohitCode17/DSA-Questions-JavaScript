/*
👉 Add Digits

Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

Example 1:

Input: num = 38
Output: 2

Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it.

Example 2:

Input: num = 0
Output: 0
*/

// Sol-1
const addDigits = function (num) {
  while (num >= 10) {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    num = sum; // update num to the sum of its digits
  }

  return num; // return single digit result
};

console.log(addDigits(38));
console.log(addDigits(0));

// Sol-2
const addDigits2 = function (num) {
  if (num === 0) {
    return 0;
  } else {
    return 1 + ((num - 1) % 9);
  }
};

console.log(addDigits2(38));
console.log(addDigits2(0));

// Concept of Digital Root:- The digital root of a non-negative integer can be found using the formula:
// If num == 0, then the digital root is 0.
// Otherwise, the digital root is 1 + (num - 1) % 9.
