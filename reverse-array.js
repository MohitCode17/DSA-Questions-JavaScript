/*
👉 Reverse an array

Problem Statement: Given an array of integers, write a function to reverse the array in place. The function should modify the original array such that the elements are in reverse order.

Example:

Input: [1, 2, 3, 4, 5]
Output: [5, 4, 3, 2, 1]

Constraints:

Do not use any additional arrays or data structures.
The reversal should be done in place, meaning the original array should be modified directly.
*/

const reverseArray = function (arr) {
  let start = 0; // initialize start pointer
  let end = arr.length - 1; // initialize end pointer

  while (start < end) {
    // swap value
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }

  return arr;
};

console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray([1, 3, 5]));

/*
👉 Two-Pointer Approach

Initialization:

- One pointer (start) is initialized to the beginning of the array (0).
- Another pointer (end) is initialized to the end of the array (arr.length - 1).
Swapping Elements:

Swapping Elements:

- Swap the elements at the start and end indices.
- Move the start pointer one step towards the center (start++).
- Move the end pointer one step towards the center (end--).

Termination:

Continue the process until the start pointer is no longer less than the end pointer.
*/
