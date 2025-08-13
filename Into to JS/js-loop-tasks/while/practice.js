let num = 0;
while (num < 10) {
  console.log(num);
  num++;
}
console.log("Practice 01");
/***

"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

 */

/*programming hero*/

let i = 0;
while (i < 60) {
  console.log(
    i,
    "I will spend at least 6 hours every single day for next 60 days!"
  );
  i++;
}

console.log("Practice 02");

/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */

let n = 60;

while (n <= 100) {
  if (n % 2 !== 0) {
    console.log("Odd Number", n);
  }
  n++;
}

console.log("Practice 03");

/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

/*programming hero*/

let m = 78;
while (m <= 98) {
  if (m % 2 === 0) {
    console.log("Even Number", m);
  }
  m++;
}

console.log("Practice 04");

/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */

let x = 81;
let sum = 0;
while (x <= 131) {
  if (x % 2 == 1) {
    sum = sum + x;
  }
  x++;
}
console.log("Sum of all the odd between 81 to 131 is :", sum);

console.log("Practice 05");

/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

/*programming hero*/
let y = 206;
let total = 0;
while (y <= 311) {
  if (y % 2 == 0) {
    total = total + y;
  }
  y++;
}
console.log("Sum of all the even between 206 to 311 is :", total);

console.log("Practice 06");

/***

As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5

 */

/*programming hero*/

let a = 1;
while (a <= 10) {
  console.log(`5 x ${a} = ${5 * a}`);
  a++;
}

console.log("Practice 07");
/***

Implement a countdown timer that counts down from 21 to 15.

 */

/*programming hero*/

let b = 21;
while (b >= 15) {
  console.log(b);
  b--;
}
