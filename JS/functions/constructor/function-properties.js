function foo() {
  return `Hello world`;
}

foo.hello = `jon`;
console.log(foo.hello);

//name in-built property
console.log(foo.name);

//length
console.log(foo.length);

//consturctor
console.log(foo.constructor);

//prototype
console.log(foo.prototype);

console.log(typeof foo.prototype);

foo.prototype.watch = `Titan`;

console.log(foo.prototype);

//call() bind() apply()
