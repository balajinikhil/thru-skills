let today = new Date();
console.log(today);

//getter and setter
console.log(today.getDate());
console.log(today.getMonth()); //count starts from 0
console.log(today.getFullYear());
console.log(today.getMinutes());
console.log(today.getHours());

let setDate = today.setDate(15);
console.log(new Date(setDate));
//setMonth
//setYear
//setHours
//setMinutes

let dt = `10/24/2019`; //Month/Date/Year
let myDt = new Date(dt);
console.log(myDt);

console.log(today.getTime());

//Epoch time
console.log(new Date(0));
