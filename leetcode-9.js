/*
👉 Palindrome Number

Given an integer x, return true if x is a palindrome, and false otherwise.

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
*/

// Sol-1 Using JS Methods

const isPalindrome1 = function (x) {
  // Edge case
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

  return x === Number(x.toString().split("").reverse().join(""));
};

// console.log(isPalindrome1(121));
// console.log(isPalindrome1(-121));
// console.log(isPalindrome1(0));
// console.log(isPalindrome1(100));

// 121 -> Number("121" -> ["1", "2", "1"] -> ["1", "2", "1"] -> "121")

// Sol-2 Optimize solution

const isPalindrome = function (x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

  // let x = 121
  let reverse = 0;
  let original = x;
  while (x > 0) {
    reverse = reverse * 10 + (x % 10); // 0 * 10 + 1 = 1
    x = Math.floor(x / 10); // 121 / 10 = 12.1 = 12
  }

  return reverse === original;
};

console.log(isPalindrome(121));
console.log(isPalindrome(100));
console.log(isPalindrome(-121));
console.log(isPalindrome(0));
