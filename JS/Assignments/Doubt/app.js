//create

let obj = {
  name: "hello"
};

let obj1 = Object.create(obj);
console.log(obj1);
console.log(obj1.name);

//call bind apply

function foo() {
  this.name = "Hello World";
}

let obj2 = new Object();
foo.call(obj2);
console.log(obj2);

//ES6

class boo {
  constructor() {
    this.name = "John";
  }
  //method
  age() {
    this.age = 30;
  }

  //add property to proto
}

let obj3 = new boo();
console.log(obj3);


