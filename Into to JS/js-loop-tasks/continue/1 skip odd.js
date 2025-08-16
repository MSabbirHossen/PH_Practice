/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/

for (let a = 1; a <= 40; a++) {
  if (a % 2 !== 0) continue;
  console.log(a);
}
