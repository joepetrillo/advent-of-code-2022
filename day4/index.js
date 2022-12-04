const fs = require("fs");

const input = fs.readFileSync("input.txt").toString().split("\n");

let complete = 0;
let partial = 0;

for (const pair of input) {
  const [l, r] = pair.split(",");
  const r1 = l.split("-").map((num) => Number(num));
  const r2 = r.split("-").map((num) => Number(num));

  const min = Math.min(r1[0], r2[0]);
  const max = Math.max(r1[1], r2[1]);

  if (r1[0] === min && r2[0] <= r1[1]) {
    partial += 1;
  } else if (r2[0] === min && r1[0] <= r2[1]) {
    partial += 1;
  }

  if ((r1[0] === min && r1[1] === max) || (r2[0] === min && r2[1] === max)) {
    complete += 1;
  }
}

console.log(`number of ranges completely overlapping = ${complete}`);
console.log(`number of ranges overlapping at all = ${partial}`);
