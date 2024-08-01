/*
👉 Linear search, also known as sequential search, is a straightforward search algorithm. It checks each element of a list sequentially until a match is found or the whole list has been searched. It's one of the simplest search algorithms but is not very efficient for large lists because it has a time complexity of O(n).

*/

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Return the index of the target element if found
    }
  }
  return -1; // Return -1 if the target element is not found
}

// Example usage:
const arr = [10, 20, 30, 40, 50];
// const target = 30;
const target = 51;
console.log(linearSearch(arr, target));
