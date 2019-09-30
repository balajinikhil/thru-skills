function Gadget(name, color) {
  this.name = name;
  this.color = color;
}

Gadget.price = 20;
Gadget.prototype.company = `google`;
console.log(Gadget.price);

var watch = new Gadget(`titan`, `brown`);

var marker = watch.constructor(`camlin`, `blue`);

console.log(watch.constructor);
console.log(watch.name);
console.log(watch.price);
console.log(`trying to acess prototype`, watch.company);
console.log(watch.hasOwnProperty(`company`));
console.log(watch.constructor.prototype.hasOwnProperty(`company`));
console.log(marker);
