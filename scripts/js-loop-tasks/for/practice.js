for (num = 1; num <= 10; num++) {
  console.log(num);
}
console.log("Practice 01");
/***

"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

 */

/*programming hero*/

for (i = 1; i <= 60; i++) {
  console.log(
    i,
    "I will spend at least 6 hours every single day for next 60 days!"
  );
}
console.log("Practice 02");

/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */

for (n = 60; n <= 100; n++) {
  if (n % 2 !== 0) console.log("Odd Number", n);
}
console.log("Practice 03");

/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

/*programming hero*/

for (m = 78; m <= 98; m++) {
  if (m % 2 == 0) console.log("Even Number", m);
}
console.log("Practice 04");

/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */

let sum = 0;
for (x = 81; x <= 131; x++) {
  if (x % 2 !== 0) sum += x;
}
console.log("Sum of all the odd numbers from 81 to 131:", sum);

console.log("Practice 05");

/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

/*programming hero*/
let total = 0;

for (y = 206; y <= 311; y++) {
  if (y % 2 == 0) total += y;
}
console.log("Sum of all the even between 206 to 311 is :", total);

console.log("Practice 06");

/***

As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5

 */

/*programming hero*/
let multiplier = 5;
for (a = 1; a <= 10; a++) {
  // console.log(`5 x ${a} = ${5 * a}`);
  console.log(a * multiplier);
}

console.log("Practice 07");
/***

Implement a countdown timer that counts down from 21 to 15.

 */

/*programming hero*/

for (b = 21; b >= 15; b--) {
  console.log(b);
}
