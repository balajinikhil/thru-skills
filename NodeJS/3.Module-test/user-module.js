let myName = "Balaji";
console.log(myName);

// console.log(module);

module.exports.myName = myName;

module.exports.foo = function() {
  console.log("Hey there");
};

module.exports.bar = function() {
  console.log("Hey I'm Bar");
};

// console.log(module)
