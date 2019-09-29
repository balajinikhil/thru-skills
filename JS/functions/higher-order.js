function foo() {
  return `i'm function foo`;
}

function acceptsFunction(cb) {
  //accepts a function as higher order parameter
  let res = cb();
  return res;
}

let res = acceptsFunction(foo);

console.log(res);

function add(a, b, cb) {
  if (typeof a != `number` || typeof b != `number`) {
    cb(`pass a number to add`, null);
  } else {
    let sum = a + b;
    cb(null, sum);
  }
}

function square(x, cb) {
  if (typeof x != `number`) {
    cb(`square accepts a number`, null);
  } else {
    cb(null, x * x);
  }
}

let n1 = 10;
let n2 = 5;

add(n1, n2, function(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
    square(data, function(err, sq) {
      if (err) {
        console.log(err);
      } else {
        console.log(sq);
      }
    });
  }
});

function outer(x) {
  //   let a = 10;
  console.log(`i'm outter function`);
  function inner(y) {
    let b = 20;
    console.log(`i'm inner function`);
    return x + y;
  }
  //console.log(b) //error because can't acesses inner function values
  return inner;
}

let val = outer(10);
//console.log(val);

let res1 = val(11);
let res2 = val(20);

console.log(res1);
console.log(res2);

/*function sum(a+b){
    return a+b;
}*/

function sum(x) {
  return function(y) {
    return x + y;
  };
}

let firstVal = sum(2);
let finalRes = firstVal(3);

console.log(finalRes);
