const ten = 10;
const eleven = 11;

console.log("The sum of", ten, "and", eleven, "is", sum(ten, eleven));
console.log(ten, "minus", eleven, "is", subtract(ten, eleven));
console.log(eleven, "times", ten, "is", multiply(ten, eleven));

function sum(p1, p2) {
  return p1 + p2;
}

function subtract(p1, p2) {
  return p1 - p2;
}

function multiply(p1, p2) {
  return p1 * p2;
}
