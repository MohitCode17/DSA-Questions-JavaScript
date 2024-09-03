/*
Given an array arr consisting of only 0's and 1's in random order. Modify the array in-place to segregate 0s onto the left side and 1s onto the right side of the array.

Examples :

Input: arr[] = [0, 0, 1, 1, 0]
Output: [0, 0, 0, 1, 1]
Explanation:  After segregation, all the 0's are on the left and 1's are on the right. Modified array will be [0, 0, 0, 1, 1].

Input: arr[] = [1, 1, 1, 1]
Output: [1, 1, 1, 1]
Explanation: There are no 0s in the given array, so the modified array is [1, 1, 1, 1]

Expected Time Complexity: O(n)
Expected Auxiliary Space: O(1)
*/

// 👉 First Approach

function segregate0_1(nums) {
  // We'll track how many 0 and 1 are present in array.
  let count0 = 0,
    count1 = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      count0++;
    } else {
      count1++;
    }
  }

  // Fill the Left part of array with 0 from index 0 to less than the count0.
  for (let i = 0; i < count0; i++) {
    nums[i] = 0;
  }
  // Fill the right part of array with 1 from index count0 to less than the length of array.
  for (let i = count0; i < nums.length; i++) {
    nums[i] = 1;
  }

  return nums;
}

// console.log(segregate0_1([0, 0, 1, 1, 0]));
// console.log(segregate0_1([1, 1, 1]));

// 👉 Second Approach (Two Pointers)

function segregate0_1_two_pointer(nums) {
  let start = 0,
    end = nums.length - 1;

  while (start < end) {
    if (nums[start] === 0) {
      start++;
    } else {
      if (nums[end] === 0) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
      } else {
        end--;
      }
    }
  }

  return nums;
}

console.log(segregate0_1_two_pointer([0, 0, 1, 1, 0]));
console.log(segregate0_1_two_pointer([1, 1, 1]));
