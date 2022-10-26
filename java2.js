//2.The user enters 2 values (A and B). Swap the contents of variables A and B
//(that means the value of variable B must be assigned to variable A, and vice versa).

let c = +prompt('Please enter the value for C');
let d = +prompt('Please enter the value for D');
let e = '' ;

console.log(`First value of C: ${c}`);
console.log(`First value of D: ${d}`);

e=c;
c=d;
d=e;

console.log(`Second value of C: ${c}`);
console.log(`Second value of D: ${d}`);