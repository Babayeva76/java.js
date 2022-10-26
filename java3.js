//3. The user enters 3 non-zero numbers (A, B and C). Print to the console
// the solution (the value of X of the standard linear equation, where A*X+B=C.

let f = +prompt('Please enter the value for F');
let g = +prompt('Please enter the value for G');
let h = +prompt('Please enter the value for H');
let x = '';

console.log(`Value of F: ${f}`);
console.log(`Value of G: ${g}`);
console.log(`Value of H: ${h}`);

x=(h-g)/f;

console.log(`The value of X: ${x}`);