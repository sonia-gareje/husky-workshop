// // ======================================================
// // STAGE 0: The first obvious problem
// // This one should fail right away because of ESLint rule
// // "no-console"
// // ======================================================

// console.log("Hello dev, this console.log should not be here!");


// // ======================================================
// // STAGE 1: Dead code, unused condition
// // Uncomment this during the workshop to trigger more linting
// // ======================================================


// if (false) {
//   console.log("This code will never run");
// }



// // ======================================================
// // STAGE 2: Variables declared globally (no const/let)
// // ======================================================

// x = 123;


// // ======================================================
// // STAGE 3: Unused imports
// // ======================================================

// import fs from "fs";
// // fs.readFile();

// // ======================================================
// // STAGE 4: Silent errors
// // Try/catch that swallows the error
// // ======================================================

// try {
//   throw new Error("Boom!");
// } catch (e) {} // <- nothing here



// ======================================================
// STAGE 5: "Secret" committed to repo
// ======================================================

const SECRET_KEY = "12312asdasd3";
const AWS_TOKEN = process.env.AWS_TOKEN;
// eslint-disable-next-line no-console
console.log(SECRET_KEY, AWS_TOKEN)
