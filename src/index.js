// ======================================================
// STAGE 0: The first obvious problem 🎯
// This one should fail right away because of ESLint rule
// "no-console"
// ======================================================

console.log("Hello dev, this console.log should not be here!");
console.log("Hello dev, this console.log should not be here!");


// ======================================================
// STAGE 1: Dead code, unused condition 👻
// Uncomment this during the workshop to trigger more linting
// ======================================================

/*
if (false) {
  console.log("This code will never run");
}
*/


// ======================================================
// STAGE 2: Variables declared globally (no const/let) 💥
// Another classic mistake you can show
// ======================================================

/*
x = 123;
*/


// ======================================================
// STAGE 3: Unused imports 📦
// ESLint should complain about this
// ======================================================

/*
// unused import
import fs from "fs";
*/


// ======================================================
// STAGE 4: Silent errors ❌
// Try/catch that swallows the error
// ======================================================

/*
try {
  throw new Error("Boom!");
} catch (e) {} // <- nothing here
*/


// ======================================================
// STAGE 5: "Secret" committed to repo 😱
// ======================================================

/*
const token = "SECRET_KEY=1234";
*/


// ======================================================
// STAGE 6: Fake “build” failure and unused values ⚙️
// The build script is intentionally failing
// ======================================================

/*
let arr = [1, 2, 3];
arr.map(n => n * n); // not using the result on purpose
*/


// ======================================================
// STAGE 7: Bad test in tests/sum.test.js 🧪
// ======================================================
//
// In tests/sum.test.js:
//   assert.equal(sum(2,2), 5);
//


// ======================================================
// STAGE 8: Example of good code 😇
// Show this last, when everything passes
// ======================================================

/*
const greet = (name) => `Hello ${name}!`;
console.log(greet("dev team"));
*/
