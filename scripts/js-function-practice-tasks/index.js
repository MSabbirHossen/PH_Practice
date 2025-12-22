console.log("The JS file is connected");

// ### Task-1
// Take four parameters. Multiply the four numbers and then return the result

function Multiply(a, b, c, d) {
  let result = a * b * c * d;
  console.log(result);
  return result;
}
Multiply(1, 2, 3, 4);

// ### Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function conditionalMultiply(a) {
  if (a % 2 !== 0) {
    result = a * 2;
    console.log(result);
    return;
  } else {
    result = a / 2;
    console.log(result);
    return;
  }
}
conditionalMultiply(5);

// ### Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(array, length) {
  let result = array;
  length = array.length;
  console.log(result, length);
  return;
}
make_avg([1, 2, 3]);
