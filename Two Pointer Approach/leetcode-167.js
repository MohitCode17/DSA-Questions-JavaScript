/*
167. Two Sum II - Input Array Is Sorted

Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

Example 1:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
Example 2:

Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
Example 3:

Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].
*/

const twoSum = function (numbers, target) {
  let start = 0,
    end = numbers.length - 1;

  while (start < end) {
    if (numbers[start] + numbers[end] === target) return [start + 1, end + 1];
    else if (numbers[start] + numbers[end] < target) start++;
    else end--;
  }
};

console.log(twoSum([2, 7, 11, 15], 9));

/*
Here's how the two-pointer approach works for this problem:

1. Initialization: Start with two pointers, start at the beginning (index 0) and end at the end (index numbers.length - 1) of the array.

2. Checking the Sum:

    Calculate the sum of the elements at the start and end pointers.
    If the sum equals the target, return the 1-indexed positions of these two pointers as [start + 1, end + 1].

3. Adjusting the Pointers:

    If the sum is less than the target, increment the start pointer to increase the sum.
    If the sum is greater than the target, decrement the end pointer to decrease the sum.

4. Termination: The loop continues until the correct pair is found (as the problem guarantees exactly one solution).

This method works because the array is sorted, so moving the pointers accordingly helps narrow down the correct pair without needing additional space.
*/
