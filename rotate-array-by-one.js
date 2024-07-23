/*
👉 Rotate Array by one

Given an array arr, rotate the array by one position in clock-wise direction.

Examples:

Input: arr = [1, 2, 3, 4, 5]
Output: [5, 1, 2, 3, 4]
Explanation: If we rotate arr by one position in clockwise 5 come to the front and remaining those are shifted to the end.

Input: arr = [9, 8, 7, 6, 4, 2, 1, 3]
Output: [3, 9, 8, 7, 6, 4, 2, 1]
Explanation: After rotating clock-wise 3 comes in first position.
*/

const rotateArray = function (arr) {
  let n = arr.length; // n = length of an array

  if (n === 0) return arr;

  let last = arr[n - 1]; // store last element of an array in last variable

  for (let i = n - 2; i >= 0; i--) {
    arr[i + 1] = arr[i];
  }
  arr[0] = last;

  return arr;
};

console.log(rotateArray([1, 2, 3, 4, 5]));
console.log(rotateArray([9, 8, 7, 6, 4, 2, 1, 3]));
console.log(rotateArray([9]));
