//json --- JavaScript Object Notation
//object to json
let user = {
    Name : 'Suvinson',
    Clg : 'sjc'
}
console.log(user);
console.log(JSON.stringify(user));

//json to object
let user1 = '{"Name": "Suvinson","Clg":  "sjc"}';
console.log(typeof(user1));
console.log(user1);
console.log(JSON.parse(user1));
console.log(typeof(JSON.parse(user1)));
