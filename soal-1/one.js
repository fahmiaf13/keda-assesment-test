function sortArray(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let maxIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] > arr[maxIndex]) {
        maxIndex = j;
      }
    }

    if (maxIndex !== i) {
      [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]];
    }
  }

  return arr;
}

// test function
const inputArray = [1, 2, 4, 3, 5, 3, 2, 1];
const expectedOutput = [5, 4, 3, 3, 2, 2, 1, 1];
const sortedArray = sortArray(inputArray);

console.log("Input Array:", inputArray);
console.log("Sorted Array:", sortedArray);
console.log("Expected Output:", expectedOutput);

const isSortedCorrectly = JSON.stringify(sortedArray) === JSON.stringify(expectedOutput);

if (isSortedCorrectly) {
  console.log("Unit test passed!");
} else {
  console.log("Unit test failed.");
}
