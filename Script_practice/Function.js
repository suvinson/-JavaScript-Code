// Function 

let a = 10;
function add()
{
    a++;
    return a;
}

console.log(add());

// delete in object

let obj = {
    name : "suvinson",
    age : 19
}

console.log(obj);

delete obj.age;

console.log(obj);

// modification of object 

obj['age'] = 19;
console.log(obj);

// for loop

let user = {
    name : 'none ',
    age : 18
};

for(key in user)
{
    console.log(key);
    console.log(user[key]);
}