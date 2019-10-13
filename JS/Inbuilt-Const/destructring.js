let obj = {
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

// let gender = obj.gender;
// let hobbies = obj.hobbies;

// console.log(gender);
// console.log(hobbies);

//object destructuring
let { gender, hobbies, age: myAge } = obj;
console.log(gender);
console.log(hobbies);

console.log(myAge);

//array destructring
//Math,physics,English,History
let results = [45, 54, 64, 80];

//let english = results[2];
//let math =results[0];

let [math, , english] = results;
console.log(english);
console.log(math);
