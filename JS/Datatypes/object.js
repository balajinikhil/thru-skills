//empty object
var emptyobj = {};
console.log(typeof emptyobj);
console.log(emptyobj);

var js = {
  name: `javascript`,
  gender: `female`,
  age: 20
};

var result = {
  Math: 40,
  phy: 90,
  chem: 70,
  "basic computer": 77,
  "": 74
};

var person = {
  name: `Balaji S`,
  gender: `male`,
  age: 22,
  hobbies: [`coding`, `gaming`, `traveling`],
  highestEducation: {
    degree: `BE`,
    stream: `electrical`,
    passedYear: 2019,
    percentage: 60
  },
  friends: [
    {
      name: `no one`,
      gender: `male`
    },
    {
      name: `some one`,
      gender: `male`
    }
  ]
};

console.log(js);
console.log(result);
console.log(person);

//dot notation and bracket notation

console.log(`name`, person.name);
console.log(`math result`, result.Math);
console.log(`hobbies`, person.hobbies[2]);
console.log(`friend`, person.friends[1].gender);

//update property
person.name = `Balaji`;
console.log(person.name);

//add a new property
person.married = false;
console.log(person);

//delete a property
delete person.married;
console.log(person);

//bracket notation

console.log(result["basic computer"]);

var userInput = `name`;
console.log(person[userInput]);
console.log(person[`friends`][1][`gender`]);
