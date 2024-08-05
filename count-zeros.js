/*
👉 Count the Zeros

Given an array arr of only 0's and 1's. The array is sorted in such a manner that all the 1's are placed first and then they are followed by all the 0's. Find the count of all the 0's.

Examples:
Input: arr[] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0]
Output: 3
Explanation: There are 3 0's in the given array.

Examples:
Input: arr[] = [0, 0, 0, 0, 0]
Output: 5
Explanation: There are 5 0's in the array.

Expected Time Complexity: O(logn)
Expected Space Complexity: O(1)
*/

function countZeros(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === 1) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  // At this point, `left` is the index of the first 0
  // The number of 0's will be the total length of the array minus the index of the first 0
  return arr.length - left;
}

console.log(countZeros([1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0]));
console.log(countZeros([0, 0, 0, 0, 0]));
