/*
👉 Selection sort is a simple comparison-based sorting algorithm. It works by repeatedly finding the minimum element from the unsorted portion of the array and placing it at the beginning.

Here's how the Selection Sort algorithm works step-by-step:

1. Start from the first element: Assume the first element is the minimum.
2. Compare this minimum with the second element: If the second element is smaller, update the minimum.
3. Continue this process for the entire array: At the end of the iteration, swap the minimum element with the first element.
4. Move to the next position: Assume the second element is the minimum and repeat the process for the rest of the array.
5. Repeat until the array is sorted.
*/

const selectionSort = function (arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // swap the found minimumIndex with the i.
    if (i !== minIndex) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
};

console.log(selectionSort([64, 25, 12, 22, 11]));
console.log(selectionSort([10, 2, -1, 15, 8]));
