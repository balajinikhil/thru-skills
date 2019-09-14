// empty array
var emptyArr = [];
console.log(emptyArr);

//Math Physics Chemistry BC
var firstSemBalu = [20, 30, 40, 50];
console.log(firstSemBalu);
console.log(firstSemBalu[3]);
console.log(firstSemBalu.length); //length of array
firstSemBalu[1] = 35; //change value
console.log(firstSemBalu);

firstSemBalu[4] = 60;
console.log(firstSemBalu); //add value

firstSemBalu[10] = 100;
console.log(firstSemBalu); //empty spaces

console.log(firstSemBalu[6]); //acess empty spaces

var list = ["hello", 20.3, false, undefined, null, [1, 2, 3]];
console.log(list);
//acessing inner array
console.log("acessing inner array", list[5][1]);

//push & pop
var hobbies = ["singing", "dancing"];

hobbies.push("coding"); //add element to array at last

hobbies.pop(); //removes element from last

console.log(hobbies);
console.log(typeof hobbies);

//
