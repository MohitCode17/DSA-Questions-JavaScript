/*
👉 Bubble sort is a simple comparison-based sorting algorithm. It repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The process is repeated until the list is sorted. The name "bubble sort" comes from the way smaller elements "bubble" to the top of the list.

Here's how the Bubble Sort algorithm works step-by-step:

1. Start from the first element: Compare the first element with the second element.
2. Swap if necessary: If the first element is greater than the second element, swap them.
3. Move to the next pair: Continue comparing and swapping adjacent elements until the end of the array is reached.
4. Repeat the process: Start again from the beginning of the list and repeat the process until no swaps are needed, indicating that the list is sorted.
*/

const bubbleSort = function (arr) {
  let n = arr.length;

  // Outer loop for each pass
  for (let i = 0; i < n - 1; i++) {
    // Inner loop for comparing and swapping adjacent elements
    for (let j = 0; j < n - 1 - i; j++) {
      // Compare adjacent elements
      if (arr[j] > arr[j + 1]) {
        // Swap if they are in the wrong order
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
};

console.log(bubbleSort([64, 25, 12, 22, 11]));
console.log(bubbleSort([10, 2, -1, 15, 8]));
