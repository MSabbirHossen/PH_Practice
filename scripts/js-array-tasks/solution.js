console.log("file is connected.");

// # js-array-tasks

// ### 1. Declare an array
// 1. Declare an array with 5 elements containing fruits
// 2. console log the 3rd index element
// 3. change the value of the 2nd index element to jambura
// 4. console log the final array

let fruits = ["Mango", "Watermelon", "Pineapple", "Guava", "Apple"];

console.log(fruits[2]);

fruits[1] = "jambura";

console.log(fruits);

// ### 2. Add or remove elements
// 1. Declare an array of 3 tourist destinations
// 2. Add a new tourist destination to your tourist array
// 3. Add two more to your array
// 4. Remove the last tourist destination you have added
// 5. display the final array as output

let places = ["Cox-bazar", "Saint-martin", "Sundarbon"];
places.push("Ahsan Manjil");
places.push("Military Museum", "Airport");
places.pop("Airport");

console.log(places);

// ### 3. Checking Array Membership with ‘includes’
//
// **Instructions:**

// 1. Create an array of books containing different book.

// 2. Use the includes method to check if the array contains a javascript book.

// 3. Print a message to the console indicating whether the element is present in the array or not.

let books = ["Math", "Physic", "Chemistry"];
console.log(books);
let a = books.includes("javascript");
console.log(a);

// ### 4. Checking if it's an Array

// **Instructions:**

// 1. Create different variables, each containing either an array or a non-array value.

// 2. Now use isArray to check if each variable is an array.

// 3. Print a message to the console indicating whether each variable is an array or not.
let b = typeof books;
console.log(b);

let age = 22;
let isStudent = true;
let book = {
  name: "javascript",
  credit: 2,
  isPass: true,
};
let array = [1, 2, 3, 4];
const isArray = book.isArray;
console.log(typeof array);
console.log(books.isArray);

// ### 5. Combining Arrays

// **Instructions:**

// 1. Create two arrays of your choice.
// 2. Use the concat method to combine the two arrays into a new array.
// 3. Print both the original arrays and the combined array using console.log().

let array1 = [11, 12, 1, 3];
console.log(array1);
let array2 = [9, 8, 7, 6, 4, 5, 1, 2, 3];
console.log(array2);

let concatArray = `${array1}, ${array2}`;
console.log(concatArray);
