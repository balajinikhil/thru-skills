function gF() {
  this.gFName = `grandfather`;
}

function Parent() {
  this.pName = `parent`;
}

function Person(name) {
  this.name = name;
}

Parent.prototype = new gF();
Person.prototype = new Parent();

let me = new Person(`john`);

console.log(me);

console.log(me instanceof Person); // checks me is an instance of Person

console.log(me.name);
console.log(me.pName);
console.log(me.gFName);
