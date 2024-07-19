/*
👉 Reverse Integer

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
*/

const reverse = function (x) {
  const MAX_INT = 2147483647; // 2^31 - 1
  const MIN_INT = -2147483648; // -2^31

  let result = 0;
  while (x !== 0) {
    // Get the last digit of x
    let digit = x % 10;

    // Update x by removing the last digit using bitwise operator
    x = (x / 10) | 0;

    // Check for overflow/underflow before updating result
    if (result > MAX_INT / 10 || (result === MAX_INT / 10 && digit > 7)) {
      return 0;
    }
    if (result < MIN_INT / 10 || (result === MIN_INT / 10 && digit < -8)) {
      return 0;
    }

    // Append the digit to the result
    result = result * 10 + digit;
  }

  return result;
};

console.log(reverse(123));
console.log(reverse(321));
console.log(reverse(-512));

// The numbers 7 and -8 are derived from the last digits of the maximum and minimum 32-bit signed integers, ensuring that the reversed number stays within the allowable range. This is crucial for preventing overflow or underflow when reversing the digits.
