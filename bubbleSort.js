'use strict';

function bubbleSort(arr) {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let current = arr[i];
        arr[i] = arr[++i];
        arr[i] = current;
        swapped = true;
      }
    }
  }
  return arr;
}

// Console Testing
let testArr1 = [1.1, 2, -5, 25, -1, 5.5];
console.log(bubbleSort(testArr1));
let testArr2 = [10, 9, 8, 7, 6, 5];
console.log(bubbleSort(testArr2));
let testArr3 = [1, 2, 3, 4, 5];
console.log(bubbleSort(testArr3));
