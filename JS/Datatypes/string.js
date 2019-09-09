var name = "Javascript ";

var number = "10";

console.log("Name", name);
console.log(typeof name);

var sent = "I'm learning JS";
console.log(sent);

//Escape Characters

var sent = 'I\'m learning "JS"';
console.log(sent);

// \n - new line
// \t - tab space
// \u
var c = "hello my name is JS \n I'm verry \t famous \u00420";
console.log(c);

//concatenation Operator
var firstName = "java";
var lastName = "script";
var age = 22;
var fullname = firstName + lastName;
console.log(fullname);

var about =
  "Hello, I'm" + firstName + " " + lastName + " " + "I'm" + " " + age + "old";
console.log(about);

//coercion
var numStr = "Hello" + 10;
console.log(numStr);

var boolConcat = "hi" + true;
console.log(boolConcat);

var val = 1 + true;
console.log(val);

//string Literal

var strliteral = `hello i'm js
Iam famous`;
console.log(strliteral);
console.log(typeof strliteral);

var abt = `Hello I'm ${firstName} ${lastName}. I'm ${age} years old`;
console.log(abt);
