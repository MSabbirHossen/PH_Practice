/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/

for (let a = 55; a <= 85; a++) {
  if (a % 5 === 0) continue;
  if (a % 2 !== 0) console.log(a);
}
