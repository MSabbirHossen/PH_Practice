/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

let bergerPrice = 600;

if (bergerPrice >= 500) {
  console.log("You will get a complementary Drinks.");
} else {
  console.log("Drinks is 30Tk");
}

/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

let weight = 82;
let hight = 1.6764;

let BMI = weight / hight ** 2;
console.log(BMI);
if (BMI < 18.5) {
  console.log("You are under Weight.");
} else if (BMI >= 18.5 && BMI <= 24.9) {
  console.log("You are normal");
} else if (BMI >= 25 && BMI <= 29.9) {
  console.log("You are Overweight, You should start exercise");
} else if (BMI >= 29) {
  console.log("You are Obese, You should consult a doctor and start exercise");
}

/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
let marks = 98;

if (marks >= 90 && marks <= 100) {
  console.log("A");
} else if (marks >= 80 && marks <= 89) {
  console.log("B");
} else if (marks >= 70 && marks <= 79) {
  console.log("C");
} else if (marks >= 60 && marks <= 69) {
  console.log("D");
} else if (marks >= 0 && marks <= 59) {
  console.log("F");
}

/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

let myResult = 88;
let friendResult = 85;
if (myResult >= 80) {
  if (friendResult > 80) {
    console.log("Let's have a lunch today.");
  } else if (friendResult >= 60 && friendResult < 80) {
    console.log("Better luck next time");
  } else if (friendResult >= 40 && friendResult < 60) {
    console.log("keep your friend's message unseen");
  } else if (friendResult < 40) {
    console.log("block your friend");
  }
} else if (myResult < 80) {
  console.log("I am sad, I need to sleep");
}

/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

let num1 = 20;
let num2 = 15;

let result;

// if (num1 > num2) {
//   result = num1 * 2;
// } else {
//   result = num1 + num2;
// }

result = num1 > num2 ? num1 * 2 : num1 + num2;

console.log(result);

/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let price = 800;
isStudent = true;
let age = 49;

if (age < 10) {
  console.log("You don't have to pay");
} else if (isStudent && age > 10 && age <= 60) {
  discount = (price * 50) / 100;
  price = price - discount;
  console.log(price);
} else if (age > 60) {
  discount = (price * 15) / 100;
  price = price - discount;
  console.log(price);
}
