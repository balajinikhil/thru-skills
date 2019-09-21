//1
var variable1 = `declared a variable`;
console.log(`1st question: ` + variable1);

//2: single line comment
/*multi line comment*/

//3
console.log(`3: store values using assigment operator`);
var a = 1,
  b = 2;
console.log(a, b);

//4
console.log(`4: Add two numbers :`, a + b);
//5
console.log(`5: Sub two numbers :`, a - b);
//6
console.log(`6: Mul two numbers :`, a * b);
//7
console.log(`7: Div `, a / b);
//8
console.log(`8: Increment `, ++a, b++);
console.log(`post increment:`, b);
//9
console.log(`9: output `);
var i = 4;
var j = 21;
var k = ++i * 7 + 2 - j--;
console.log(k);

//10
console.log();
var z = a % b;
console.log(`10: to get remainder`, z);

//11
var w = `this is a string`;
console.log(`11: typeof`, typeof w);

//12
var x = ' Alan said, "Peter is learning Javascript"';
console.log(`12:`, x);

//13
var t = `firstName`,
  s = `lastName`;
console.log(`13: concatination`, t + " " + s);

//14
var first = `this is 1st string`;
var seccond = `this is 2nd stirng`;
var full = first + seccond;
console.log(`14: conc using +=`, full);

//15
console.log(`15: append number `, first + ` ` + i);

//16
var array = [`multiple values`, 10, 11, true];
console.log(`16: array`, array);

//17
//console.log(`17: isarray`, isarray(array));

//18
console.log(`18: length of array`, array.length);

//19
var element5 = [1, 2, 3, 4, 5];
l = element5[4];
console.log(l);

//20
element5.push(6);
console.log(`20: push`, element5);
