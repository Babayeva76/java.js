//7. User gives 3 numbers (x, y, r). Find out if point with location (x,y)
// is inside a circle with radius r? (the center of the circle is at the origin)

let n = +prompt('Please enter the value for N');
let p = +prompt('Please enter the value for P');
let r = +prompt('Please enter the value for R');

console.log(`Value of N: ${n}`);
console.log(`Value of P: ${p}`);
console.log(`Value of R: ${r}`);

let result = Math.sqrt(n**2+p**2, 2);

if(r < result && r>=0)
{
    console.log('The point is inside the circle')
}
else if (r === result && r>=0)
{
    console.log('The point touches the circle ')
}
else if (r > result && r>=0)
{
    console.log('The point is outside the circle')
}
else
{
    alert("The radius can't be negative")
}