//Hoisting moves declaration part to top

var a = 20; //interview
poo();
function poo() {
  console.log(a);
  var a = 20;
  console.log(a);
}
// poo();

// foo2();
var foo2 = function() {
  console.log(`fn expression`);
};
foo2();
