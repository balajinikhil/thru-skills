// this key word points to current object
//open in browser
var a = 10;
console.log(this);

function add() {
  console.log(this);
}
//function call
add();

var obj = {
  name: `hello`,
  desc: function() {
    console.log(this);
    function inner() {
      console.log(`inner `, this);
    }
    inner();
  }
};

//method call
obj.desc();
