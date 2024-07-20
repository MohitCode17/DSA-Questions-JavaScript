/*
👉 Power of Two

Given an integer n, return true if it is a power of two. Otherwise, return false.
An integer n is a power of two, if there exists an integer x such that n == 2x.

Example 1:

Input: n = 1
Output: true
Explanation: 20 = 1
Example 2:

Input: n = 16
Output: true
Explanation: 24 = 16
Example 3:

Input: n = 3
Output: false
*/

// Sol-1

const isPowerOfTwo1 = function (n) {
  while (n !== 1) {
    // Edge case
    if (n % 2 === 1 || n < 0) return false;

    n /= 2;
  }
  return true;
};

console.log(isPowerOfTwo1(32));
console.log(isPowerOfTwo1(16));
console.log(isPowerOfTwo1(15));
console.log(isPowerOfTwo1(-16));

// Sol-2 Optimize solution using Bitwise operator (&)

const isPowerOfTwo = function (n) {
  if (n <= 0) return false;

  return (n & (n - 1)) === 0;
};

console.log(isPowerOfTwo(32));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(15));
console.log(isPowerOfTwo(-16));

// Bitwise AND operation, each bit of the output is 1 if the corresponding bits of both operands are also 1. If either bit of an operand is 0, the corresponding bit in the result is 0.
