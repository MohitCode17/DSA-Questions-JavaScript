/*
👉 Insertion sort is a simple comparison-based sorting algorithm. It works similarly to how you might sort playing cards in your hands. The array is divided into a "sorted" section and an "unsorted" section. Initially, the sorted section contains only the first element. The algorithm then repeatedly takes the first element from the unsorted section and inserts it into the correct position within the sorted section. This process is repeated until all elements are sorted.

Steps
1. Start with the second element (index 1), considering the first element (index 0) is already sorted.
2. Compare the current element with the elements in the sorted section (to its left).
3. Shift elements in the sorted section to the right until you find the correct position for the current element.
4. Insert the current element into its correct position.
5. Repeat this process for all elements in the array.
*/

const insertionSort = function (arr) {
  let i, temp, j;

  for (i = 1; i < arr.length; i++) {
    temp = arr[i];
    j = i - 1;

    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }

  return arr;
};

console.log(insertionSort([64, 25, 12, 22, 11]));
console.log(insertionSort([10, 2, -1, 15, 8]));
