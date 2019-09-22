var name = `JS`;
console.log(name == `JS`);

//if statment
if (name == `Javascript`) {
  //if block
  console.log(`inside if block`, name);
} else {
  console.log(`name property dosen't match`);
}

var language = `python`;
if (language == `JS`) {
  console.log(`language is Javascript`);
} else if (language == `java`) {
  console.log(`language is java`);
} else if (language == `python`) {
  console.log(`language if python`);
} else {
  console.log(`choose a language`);
}
//even or odd
var num = 20;
if (num % 2 == 0) {
  console.log(`even`);
} else {
  console.log(`odd`);
}

//discount
var actualPrice = 5000;
var discountPrice = 0;
if (actualPrice < 2000) {
  discountPrice = actualPrice;
} else if (actualPrice > 2000 && actualPrice <= 5000) {
  discountPrice = actualPrice - 500;
} else if (actualPrice >= 10000) {
  discountPrice = actualPrice - 1000;
}
console.log(`discounted price: `, discountPrice);

//ternary operator
var evnOrOdd = num % 2 == 0 ? `even` : `odd`;
console.log(evnOrOdd);
