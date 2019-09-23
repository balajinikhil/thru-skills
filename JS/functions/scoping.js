//scope =>
var a = 10;

if (true) {
  var b = 10;
  console.log(a);
  console.log(`val of b `, b);
}

console.log(`val of b outside `, b);

function foo(x) {
  d = 20; //gets decclared in global scope since we are not using var
  var c = 10;
  console.log(x);
  console.log(`inside of fn `, a);
  console.log(`val of b inside fn`, b);
  console.log(`val of c inside fn`, c);
}

foo(2);
// console.log(`val of c outside`, c);
console.log(d);
