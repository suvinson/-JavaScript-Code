//Array
//we can use any data type using array in javascript 
let arr = ['one','two','three'];
console.log(arr[0]);
console.log(arr[1]);

//pop removes the last element 
console.log(arr.pop());
console.log(arr);

//shift removes the first element
console.log(arr.shift());
console.log(arr);

//printing elements one by one 

let num = ['a','b','c'];
// of is used to print the elements 
for(n of num)
{
    console.log(n);
}

// in is used to print the index
for(n in num)
{
    console.log(n);
}

//normal printing
for(let i=0;i<num.length;i++)
{
    console.log(num[i]);
}
