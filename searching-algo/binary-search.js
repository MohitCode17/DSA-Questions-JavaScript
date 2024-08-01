/*
The binary search algorithm is a highly efficient searching technique that works on sorted arrays. It operates by repeatedly dividing the search interval in half. If the value of the search key is less than the item in the middle of the interval, the algorithm narrows the interval to the lower half. Otherwise, it narrows it to the upper half. This process continues until the value is found or the interval is empty.

Steps of Binary Search:-

1. Start with two pointers, one at the beginning (low) and one at the end (high) of the sorted array.
2. Calculate the middle index: mid = Math.floor((low + high) / 2).
3. Compare the middle element with the target element:
  - If the middle element is equal to the target, return the middle index.
  - If the middle element is less than the target, set low to mid + 1 to narrow the search to the upper half.
  - If the middle element is greater than the target, set high to mid - 1 to narrow the search to the lower half.
4. Repeat steps 2-3 until low is greater than high.
5. If the target element is not found, return -1.
*/

function binarySearch(array, target) {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (array[mid] === target) {
      return mid; // Return the index if the target is found
    } else if (array[mid] < target) {
      low = mid + 1; // Narrow the search to the upper half
    } else {
      high = mid - 1; // Narrow the search to the lower half
    }
  }

  return -1; // Return -1 if the target is not found
}

// Example usage:
const arr = [1, 3, 5, 7, 9, 11];
const target = 7;
console.log(binarySearch(arr, target));

// This implementation is efficient for large datasets, with a time complexity of O(log n), making it much faster than linear search for sorted arrays.
