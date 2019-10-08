//convert celcius to farhenit
function converToF(celcius) {
  let farhenit = celcius * (9 / 5) + 32;
  return farhenit;
}
let celciusInput = 20; //input temperature
let farhenitTemp = converToF(celciusInput);
console.log(`Temperatue in Farhenit is :`, farhenitTemp);

//factorize a number

function factorizeNumber(num) {
  if (num == 1 || num == 0) {
    //0! and 1! is one
    return 1;
  } else {
    //using for loop
    for (i = num - 1; i >= 1; i--) {
      num = num * i;
    }
    return num;
  }
}
console.log(`factor of the number is : `, factorizeNumber(5));

//using while loop
function factorizeUsingWhile(num1) {
  let result = num1;
  if (num1 == 0 || num1 == 1) {
    return 1;
  } else {
    while (num1 > 1) {
      num1--;
      result = result * num1;
    }
    return result;
  }
}

console.log(`factorize using while :`, factorizeUsingWhile(1));

//with Recursion

function factorizeUsingRecursion(num2) {
  if (num2 == 0 || num2 == 1) {
    return 1;
  } else {
    return (num2 = num2 * factorizeUsingRecursion(num2 - 1));
  }
}

console.log(`factorized using recursion :`, factorizeUsingRecursion(5));

//Return Largest Numbers in Arrays

function largestArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let gV = 0;
    for (let j = 0; j < arr[i].length; j++) {
      gV = arr[i][j];
      if (arr[i][j + 1] > gV) {
        gV = arr[i][j + 1];
      }
    }
    result.push(gV);
  }
  return result;
}

let inputArrays = largestArray([[3, 4, 5], [5, 6, 7], [4, 5, 6], [45, 65, 78]]);
console.log(`largest numbers in arrays is :`, inputArrays);

//repeat a string
function repeatString(string, times) {
  let final = "";
  for (let i = 0; i < times; i++) {
    final = final + string;
  }
  return final;
}
console.log(`Repeated string is :`, repeatString(`abc`, 7));

//repeat a sting using while
function repeatUsingWhile(sting, times) {
  final = ``;
  while (times > 0) {
    final = final + sting;
    times--;
  }
  return final;
}

console.log(`repeat using while :`, repeatUsingWhile(`abc`, 2));

//Repeat Using recursion
function repeatUsingRecursion(string, times) {
  if (times == 0) {
    return ``;
  } else {
    return string + repeatUsingRecursion(string, times - 1);
  }
}
console.log(`using recursion`, repeatUsingRecursion(`abc`, 1));

// Write a function to check if a value is classified as a boolean primitive
function toCheckBoolean(value) {
  if (value == true || value == false) {
    return true;
  } else {
    return false;
  }
}
console.log(`to check boolean :`, toCheckBoolean(true));

//Title Case a Sentence

//falsy value bouncer
function bouncer(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) newArray.push(arr[i]);
  }
  return newArray;
}
console.log(bouncer([4, 2, 4, NaN]));
