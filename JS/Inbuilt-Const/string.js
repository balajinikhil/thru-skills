let primitiveStr = `hello i'm primitive`;
var str = new String(`hello i'm string Object`);
console.log(typeof primitiveStr);
console.log(typeof str);

console.log(str instanceof String);
console.log(primitiveStr instanceof String);

console.log(str.length);
console.log(primitiveStr.length);

console.log(primitiveStr[1]); //acessing the values of string
console.log(str[1]);

console.log(str.toString()); //acess the value from string object
console.log(str.valueOf());

console.log(str.toUpperCase()); //converts string to upper case

console.log(primitiveStr.toLocaleLowerCase()); //converts to lower case

//charAt();
//acess particular charcater
console.log(str.charAt(2));

//indexOf()
//searches for that particular character and gives its position
console.log(str.indexOf(`l`, 3));
console.log(str.lastIndexOf(`0`, 17)); //starts searching form last but gives count from start

//split();
//seperate the string and converts it into array
console.log(primitiveStr.split(` `));

//substr();
//gives a part of sting,       starting,length
console.log(primitiveStr.substr(1, 4));
//same                            starting,end  is not included
console.log(primitiveStr.substring(1, 4));
