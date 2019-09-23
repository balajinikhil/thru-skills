//function expression
//NFE ==> Named function expression
var sum = function add(a, b) {
  return a + b;
};
var res = sum(2, 3);
console.log(res);

//Use of Anonymous Function
//1.Self-Executing Function
//2.Callbacks

//self-executing function
(function(x, y) {
  console.log(`i'm anonymous`, x, y);
})(2, 3);

//callbacks
function foo() {
  console.log(`hello i'm call back`);
}

function acceptCallback(cb) {
  cb();
}
acceptCallback(function() {
  console.log(`hello i'm call back`);
});
