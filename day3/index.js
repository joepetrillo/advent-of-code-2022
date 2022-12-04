const fs = require("fs");

const input = fs.readFileSync("input.txt").toString().split("\n");

// PART 1
// let total = 0;

// for (const rucksackItems of input) {
//   const rucksack = rucksackItems.split("");
//   const left = rucksack.slice(0, rucksack.length / 2);
//   const right = rucksack.slice(rucksack.length / 2);

//   const same = left.filter((item) => right.includes(item))[0];

//   if (same === same.toLowerCase()) {
//     total += same.charCodeAt(0) - 97 + 1;
//   } else {
//     total += same.charCodeAt(0) - 38;
//   }
// }

// PART 2
let total = 0;

for (let i = 0; i < input.length; i += 3) {
  const same = [
    input[i].split(""),
    input[i + 1].split(""),
    input[i + 2].split(""),
  ].reduce((a, b) => a.filter((c) => b.includes(c)))[0];

  if (same === same.toLowerCase()) {
    total += same.charCodeAt(0) - 97 + 1;
  } else {
    total += same.charCodeAt(0) - 38;
  }
}

console.log(total);
