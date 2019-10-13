let arr = [23, 11, 12, 18];

//for in loop
for (let ele in arr) {
  console.log(`for in`, arr[ele]);
}

//for of
for (let ele of arr) {
  console.log(`for of`, ele);
}

//In object
let obj = { name: `JS`, gender: `female`, age: 25 };

//for in on objects
for (let ele in obj) {
  if (obj.hasOwnProperty(ele)) {
    //to avoid checking in prototype
    console.log(obj[ele]);
  }
}

//
let keys = Object.keys(obj);
console.log(keys);

Object.keys(obj).forEach(ele => {
  console.log(obj[ele]);
});
