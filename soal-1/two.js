function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

// test function

const input1 = [100, 200, 300, 400];
const num1 = 2;
const expectedOutput1 = 700;

const input2 = [1, 4, 2, 10, 23, 3, 1, 0, 20];
const num2 = 4;
const expectedOutput2 = 39;

const input3 = [-3, 4, 0, -2, 6, -1];
const num3 = 2;
const expectedOutput3 = 5;

const result1 = maxSubarraySum(input1, num1);
const result2 = maxSubarraySum(input2, num2);
const result3 = maxSubarraySum(input3, num3);

console.log("Input 1:", input1);
console.log("Expected Output 1:", expectedOutput1);
console.log("Result 1:", result1);
console.log("Unit test 1:", result1 === expectedOutput1);

console.log("Input 2:", input2);
console.log("Expected Output 2:", expectedOutput2);
console.log("Result 2:", result2);
console.log("Unit test 2:", result2 === expectedOutput2);

console.log("Input 3:", input3);
console.log("Expected Output 3:", expectedOutput3);
console.log("Result 3:", result3);
console.log("Unit test 3:", result3 === expectedOutput3);
