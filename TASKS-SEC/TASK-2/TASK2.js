let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

let input;
do {
  input = 5;
  console.log(input);
} while (input <= 0);

let sum = 0;
for (let j = 1; j <= 5; j++) {
  sum += j;
}
console.log(sum);

for (let a = 1; a <= 10; a++) {
  let row = "";
  for (let b = 1; b <= 10; b++) {
    row += (a * b).toString().padStart(4, " ");
  }
  console.log(row);
}
