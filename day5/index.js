const fs = require("fs");

const input = fs.readFileSync("input.txt").toString().split("\n\n");

const startingPositions = input[0].split("\n").slice(0, -1).reverse();
const instructions = input[1].split("\n");
const stacks = {};

for (const row of startingPositions) {
  let stack = 1;
  for (let i = 1; i < row.length; i += 4) {
    if (!stacks[stack]) stacks[stack] = [];
    if (row[i] !== " ") {
      stacks[stack].push(row[i]);
    }
    stack++;
  }
}

// singular crate movements
function useOldCrane() {
  for (const instruction of instructions) {
    const [, amount, , from, , to] = instruction.split(" ");
    for (let i = 0; i < amount; ++i) {
      const crate = stacks[from].pop();
      stacks[to].push(crate);
    }
  }

  let topSingular = "";
  Object.values(stacks).forEach((arr) => (topSingular += arr[arr.length - 1]));
  console.log(`The top crates after singular movements are - ${topSingular}`);
}

// grouped crate movements
function useNewCrane() {
  for (const instruction of instructions) {
    const [, amount, , from, , to] = instruction.split(" ");

    const crates = stacks[from].splice(stacks[from].length - amount, amount);
    stacks[to].push(...crates);
  }

  let topGroup = "";
  Object.values(stacks).forEach((arr) => (topGroup += arr[arr.length - 1]));
  console.log(`The top crates after group movements are - ${topGroup}`);
}

// useOldCrane();
useNewCrane();
