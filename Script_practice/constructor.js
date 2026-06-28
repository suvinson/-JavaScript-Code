
//constructor

let a = {
    name : 'none'
}

function User(){
    this.name = 'suvinson';
}

let ans = new User();

console.log(ans);

// addition using constructor

function Add(){
    this.a = 10;
    this.b = 20;
    return this.a + this.b;
}

console.log(Add());