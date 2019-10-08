var res = [10, 20, 30];
var res2 = new Array(10, 20, 30, 40, 50, 60);

var prices = new Array(10); //creates an empty array with length 10

console.log(res2);

console.log(prices);

console.log(prices.length);

//push
res2.push(40);
console.log(res2);

//pop
res2.pop();
console.log(res2);

//shift and unshift
//unshift adds at start
res2.unshift(23);
console.log(res2);

//shift removes from start
res2.shift();
console.log(res2);

//join();
//converts array into string specifiy spaces in-between using ()` `)
let joinValue = res2.join(`-`);
console.log(joinValue);

//slice();
//a part of array which we want to extract
//                   start ,end   indexs
let sliced = res2.slice(1, 3);
console.log(sliced);
console.log(res2);

//splice();
//to remove a part of array and it alters the original array
//                     start,length,new values to add
let spliced = res2.splice(1, 3, 100, 200, 300);
console.log(spliced);
console.log(res2);

//sort();
//rearranges the array in increasing value it considers only first digit
let unsorted = [3, 2, 5, 11, 9];
let sorted = unsorted.sort();
console.log(sorted);

//forEach()
let arr = [2, 4, 6, 8];
let mltiple = [];
console.log(`Advance me`);
arr.forEach(function(ele, i, arr) {
  //   console.log(ele);
  //   console.log(i);
  //   console.log(arr);

  mltiple.push(ele * 2);
});

console.log(mltiple);

Array.prototype.add = function() {
  let result = 0;
  for (let i = 0; i < this.length; i++) {
    result += this[i];
  }
  return result;
};

console.log(arr.add());

/*overide
Array.prototype.push = function(){
  return `Hello`
}
*/
