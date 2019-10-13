//parseInt();
//integer values
let n = `12`;
let num = parseInt(n);
console.log(num);
console.log(`parseInt`, parseInt(10, 8)); //base binary(2),octal(8),hexa(6)

//parsefloat();
//floating point values
let f = `10.121212`;
let num1 = parseFloat(f);
console.log(num1);

//is NaN()
let nn = 12 * `hey`;
console.log(nn);

console.log(isNaN(nn));

//isFinite
let finite = 1e309; //max value in JS
console.log(isFinite(finite));

//passing and comparission of objects
//assign();
let obj = {
  name: `JS`,
  gender: `female`
};

let obj2 = {
  name: `Java Script`,
  age: 25
};

Object.assign(obj2, obj);

console.log(obj2 == obj);

console.log(obj2);

//
let person1 = {
  name: `jon`
};
let person2 = {
  name: `jon`
};
//JSON
console.log(JSON.stringify(person2));
console.log(`compare 2 objects :`, person1 === person2);

console.log(JSON.stringify(person1) == JSON.stringify(person2));
