/*
👉 Armstrong Number

Given a number x, determine whether the given number is Armstrong’s number or not.

Example: 

Input:153
Output: Yes
153 is an Armstrong number.
1*1*1 + 5*5*5 + 3*3*3 = 153

Input: 120
Output: No
120 is not a Armstrong number.
1*1*1 + 2*2*2 + 0*0*0 = 9

Input: 1253
Output: No
1253 is not a Armstrong Number
1*1*1*1 + 2*2*2*2 + 5*5*5*5 + 3*3*3*3 = 723

Input: 1634
Output: Yes
1*1*1*1 + 6*6*6*6 + 3*3*3*3 + 4*4*4*4 = 1634
*/

const countDigit = function (num) {
  let count = 0;
  while (num > 0) {
    count++;
    num = Math.floor(num / 10);
  }
  return count;
};

const checkArmStrongNum = function (num, digit) {
  let ans = 0;
  let original = num;
  while (num > 0) {
    let rem = num % 10; // 153 % 10 = 3
    num = Math.floor(num / 10); // 153 / 10 = 15
    ans += Math.pow(rem, digit); // 0 + 3^3 = 27
  }
  return ans === original;
};

const isArmstrong = function (x) {
  let digit = countDigit(x);
  return checkArmStrongNum(x, digit);
};

console.log(isArmstrong(153));
console.log(isArmstrong(120));
