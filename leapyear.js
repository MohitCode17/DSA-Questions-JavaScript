/*
👉 Leap Year (GeeksForGeeks)

For an input year N, find whether the year is a leap or not.

Example 1:

Input:
N = 4
Output:
1
Explanation:
4 is not divisible by 100
and is divisible by 4 so its
a leap year

Example 2:

Input:
N = 2021
Output:
0
Explanation:
2021 is not divisible by 100
and is also not divisible by 4
so its not a leap year

Your Task:
You don't need to read input or print anything. Your task is to complete the function isLeap() which takes an integer N as input parameter and returns 1 if N is a leap year and 0 otherwise.
*/

// Cond 1. Year divided by 400 will be a leap year  (e.g. 1600, 2000, etc.)
// Cond 2. If year divided by 4 but not by 400 is a leap year (e.g. 1700, 1800, etc.)

const isLeap = function (n) {
  if (n % 400 === 0) return 1;
  else if (n % 4 === 0 && n % 100 !== 0) return 1;
  else return 0;
};

console.log(isLeap(4));
console.log(isLeap(1900));
console.log(isLeap(2024));
console.log(isLeap(2026));
console.log(isLeap(1800));