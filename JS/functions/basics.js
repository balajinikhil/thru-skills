//function declaration

// function myFunc() {
//   console.log(`inside a function`);
// }

// myFunc();

// function add(a, b) {
//   console.log(typeof arguments);
//   var sum = a + b;

//   if (typeof a != `number`) {
//     return `pass a number`;
//   }
//   console.log(`sum : `, sum);
//   return sum;
// }
// var firstAdd = add(`abcd`, 3);

function add() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i];
  }
  return sum;
}
var secondAdd = add(5, 5, 10, 14);
// console.log(firstAdd);
console.log(secondAdd);

//even or odd
function evenOdd(num) {
  if (num % 2 == 0) {
    return `even`;
  } else {
    return `odd`;
  }
}

var res = evenOdd(2);
console.log(res);
