function sumEvenNumbers(obj) {
  let sum = 0;

  for (const key in obj) {
    if (typeof obj[key] === "number") {
      if (obj[key] % 2 === 0) {
        sum += obj[key];
      }
    } else if (typeof obj[key] === "object") {
      sum += sumEvenNumbers(obj[key]);
    }
  }

  return sum;
}

// test function
const input1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

const expectedOutput1 = 6;

const input2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 4 }, ee: "car" },
};

const expectedOutput2 = 12;

const result1 = sumEvenNumbers(input1);
const result2 = sumEvenNumbers(input2);

console.log("Input 1:", input1);
console.log("Expected Output 1:", expectedOutput1);
console.log("Result 1:", result1);
console.log("Unit test 1:", result1 === expectedOutput1);

console.log("Input 2:", input2);
console.log("Expected Output 2:", expectedOutput2);
console.log("Result 2:", result2);
console.log("Unit test 2:", result2 === expectedOutput2);
