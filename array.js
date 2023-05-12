// Write a JavaScript program to create an array by taking the
//  first and last elements from a given array of integers. The length must be larger than or equal to 1.

function createArrayFromFirstAndLastElements(arr) {
  if (arr.length < 1) {
    throw new Error("Array length must be larger than or equal to 1");
  }

  var firstElement = arr[0];
  var lastElement = arr[arr.length - 1];

  return [firstElement, lastElement];
}
var integers = [1, 2, 3, 4, 5];
var result = createArrayFromFirstAndLastElements(integers);
console.log(result);
