//PI
console.log(Math.PI);

//SQR
console.log(Math.SQRT2);

//Euler's constant
console.log(Math.E);

//Natural Log 10
console.log(Math.LN10);

//Log 2
console.log(Math.LN2);

//pow(); power 10^2
console.log(Math.pow(10, 2));

//max(); maximum value available
console.log(Math.max(23, 151, 16526, 166));

//min(); minimum value available
console.log(Math.min(10, 101, 293, 3));

/*Round Method 
   ceil(); upwards
   floor(); downwards
   round();
round a number
*/

let num = 10.4;
console.log(Math.ceil(num));
console.log(Math.floor(num));
console.log(Math.round(num));

//sqrt
console.log(Math.sqrt(9));

//log10
console.log(Math.log10(23));

//random(); generates a random number form 0 to 1
console.log(Math.random());

function randomNumber(min, max) {
  return parseInt(Math.random() * min + (max - min));
}

console.log(randomNumber(5, 10));
