//console.log(xyz);
// let xyz = 12;
//Error()

//ReferenceError
//SyntaxError
//EvalError
//URIError

try {
  //   console.log(xyz);

  throw new EvalError`Something nasty happened`();
} catch (error) {
  console.log(`in the catch block`);
  console.log(error.message);
  console.log(error.stack);
  console.log(error.name);
} finally {
  console.log(`I'm finally`);
}

console.log(`hello JS Folks`);

function foo() {
  console.log(marker);
}

function bar() {
  console.log(`I am bar`);
  foo();
}

function baz() {
  console.log(`I am Baz`);
  bar();
}

// baz();

try {
  baz();
} catch (error) {
  console.log(error);
}
