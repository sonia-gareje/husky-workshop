import assert from "assert";
function sum(a,b){ return a+b; }
// intentionally wrong
assert.equal(sum(2,2),5);
