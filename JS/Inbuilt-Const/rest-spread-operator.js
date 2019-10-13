/*
..variable =>

REST =>converts comma sperated values to an array
Spread =>converts array to comma seperated values
*/

function add(...args) {
  //arguments
  console.log(args);
  console.log(...args);
}

add(12, 1414);

let arr = [3, 45, 67, 96];

let largest = Math.max(...arr);
console.log(largest);
