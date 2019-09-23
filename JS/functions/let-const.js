const PI = 3.14;
// PI =3.14444
console.log(PI); //once assigned can't reassign the value

const obj = {
  name: `balaji`,
  gender: `male`
};

// obj = { name: `JS` };
obj.name = `Balaji S`; //can change the internal value in const
console.log(obj);

if (true) {
  let b = 10;
  console.log(b);
}
// console.log(`outside :`, b);

var x = 10; //interview
function foo() {
  //   console.log(x);
  let x = 20;
  console.log(x);
}
foo();
