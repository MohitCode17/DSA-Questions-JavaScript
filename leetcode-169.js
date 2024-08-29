/*
169. Majority Element

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3

Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
*/

// 👉 Moore's Voting Algorithm

const majorityElement = (nums) => {
  let candidate = null;
  let count = 0;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    // If the current element is the same as candidate, increment count.
    // If the current element is different, decrement count.
    count += num === candidate ? 1 : -1;
  }

  return candidate;
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
