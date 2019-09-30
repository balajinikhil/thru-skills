function Person(name, gender) {
  //   console.log(this);
  //this ={}

  this.name = name;
  this.gender = gender;
}

var js = new Person(`javascript`, `female`);

console.log(js);

var mac = new Person(`macbook`, `male`);
console.log(mac.name);

var jon = Person(`jon`, `male`);
console.log(jon);

console.log(js.constructor);

let obj = {
  a: 10,
  b: 11
};

console.log(obj.constructor);

console.log(Person.constructor);

let sum = new Function(`a`, `b`, `return a+b`);

function sm(a, b) {
  return a + b;
}

console.log(sum(1, 1));
console.log(typeof sum);
