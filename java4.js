//4. User gives 2 numbers (A and B). If A>B then print to the console the result of A+B,
// if A=B then the result of A*B, if A<B then A-B.

let j = +prompt('Please enter the value for J');
let k = +prompt('Please enter the value for K');
let result = '';

console.log(`Value of J: ${j}`);
console.log(`Value of K: ${k}`);

if (j>k)
{
    result = j+k;
    console.log(`J+K is: ${result}`);
}
else if (j==k)
{
    result = j*k;
    console.log(`J*K is: ${result}`);
}
else if (j<k)
{
    result = j<k;
    console.log(`J-K is: ${result}`);
}