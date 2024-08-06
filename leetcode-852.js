/*
👉 Peak Index in a Mountain Array

You are given an integer mountain array arr of length n where the values increase to a peak element and then decrease.
Return the index of the peak element.
Your task is to solve it in O(log(n)) time complexity.

Example 1:
Input: arr = [0,1,0]
Output: 1

Example 2:
Input: arr = [0,2,1,0]
Output: 1

Example 3:
Input: arr = [0,10,5,2]
Output: 1
*/

const peakIndexInMountainArray = function (arr) {
  let start = 0,
    end = arr.length - 1;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] > arr[mid + 1]) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  return start;
};

console.log(peakIndexInMountainArray([1, 2, 3, 4, 5, 6, 3, 2, 1]));
console.log(peakIndexInMountainArray([0, 10, 5, 2]));
console.log(peakIndexInMountainArray([0, 2, 1, 0]));
