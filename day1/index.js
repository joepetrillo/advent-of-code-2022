const fs = require("fs");

const input = fs
  .readFileSync("input.txt")
  .toString()
  .split("\n\n")
  .map((cur) => cur.split("\n"));

let max = 0;
let topThree = 0;
const all = [];

for (const backpack of input) {
  let total = 0;
  for (const food of backpack) {
    total += Number(food);
  }
  max = Math.max(max, total);
  all.push(total);
}

all.sort((a, b) => b - a);

for (let i = 0; i < Math.min(3, all.length); ++i) topThree += all[i];

console.log(`The elf carrying the most has ${max} calories`);
console.log(`The top three elves are carrying ${topThree} calories`);
