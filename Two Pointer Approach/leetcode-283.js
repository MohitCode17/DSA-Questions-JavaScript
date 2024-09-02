/*
283. Move Zeroes

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:

Input: nums = [0]
Output: [0]
*/

const moveZeroes = function (nums) {
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0]));
console.log(moveZeroes([1, 0, 1]));

/*
Approach:
1. Two-Pointer Technique:

    Use two pointers: left and right.
    The left pointer is used to keep track of the position where the next non-zero element should be placed.
    The right pointer traverses the array to find non-zero elements.

2. Process:

    Start both left and right pointers at the beginning of the array.
    Traverse the array using the right pointer.
    If nums[right] is not zero, swap nums[left] with nums[right] and move the left pointer one step forward.
    This way, all non-zero elements are shifted to the front of the array while maintaining their order.
    After the loop, all the zeroes will naturally end up at the end of the array.
*/
