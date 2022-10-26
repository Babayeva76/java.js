//5.User gives 3 numbers (a, b, c). 
//Find out and print to the console the solution of quadratic equation ax^2+bx+c=0.

let q = +prompt('Please enter the value for Q');
let l = +prompt('Please enter the value for L');
let m = +prompt('Please enter the value for M');

let d1 = '';
let x1 = '';
let x2 = '';

console.log(`Value of Q: ${q}`);
console.log(`Value of L: ${l}`);
console.log(`Value of M: ${m}`);

d1 = l**2-4*q*m;
console.log(`Value of Discrimant: ${d1}`);

if(d1>0 || d1===0)
{
x1 = (-l+Math.sqrt(d1,2))/(2*q);
x2 = (-l-Math.sqrt(d1,2))/(2*q);
console.log(`Value of first root: ${x1}`);
console.log(`Value of second root: ${x2}`);
}
else {
    alert('The equation has not real roots ');
}