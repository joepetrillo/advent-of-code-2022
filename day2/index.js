// BOTH PARTS
// A = rock
// B = paper
// C = scissors
// 0 for loss
// 3 for draw
// 6 for win

// PART 1
// X = rock
// Y = paper
// Z = scissors
// rock is 1 pt
// paper is 2 pt
// scissors is 3 pt

// PART 2
// X means lose
// Y means draw
// Z means win

const fs = require("fs");

const input = fs
  .readFileSync("input.txt")
  .toString()
  .split("\n")
  .map((cur) => cur.split(" "));

const score = {
  A: 1,
  B: 2,
  C: 3,
};

let total = 0;

for (const pair of input) {
  const opponent = pair[0];
  const user = pair[1];

  if (user === "Y") {
    total += score[opponent] + 3;
  } else if (opponent === "A" && user === "Z") {
    total += score["B"] + 6;
  } else if (opponent === "A" && user === "X") {
    total += score["C"];
  } else if (opponent === "B" && user === "Z") {
    total += score["C"] + 6;
  } else if (opponent === "B" && user === "X") {
    total += score["A"];
  } else if (opponent === "C" && user === "Z") {
    total += score["A"] + 6;
  } else if (opponent === "C" && user === "X") {
    total += score["B"];
  }
}

console.log(total);
