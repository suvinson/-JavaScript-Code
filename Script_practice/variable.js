let num = "Number : ";
var num1 = 10;
const vr = 1;

//not a number
let nan = NaN;
console.log(num,num1);
console.log(vr);
console.log(typeof num1);
console.log(nan);

//BigInt size = 2^53 - 1; we can use the big int by adding the 'n' in the last number

let limit = 123456789n;
console.log(limit);

//embed

let n = `1+2 = ${1+2}`;
console.log(n);

//object 

let a = {};
console.log(typeof a);
