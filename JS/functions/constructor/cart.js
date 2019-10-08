/* */

function Cart() {
  this.items = [];
}

Cart.prototype.add = function(item) {
  this.items.push(item);
};

Cart.prototype.totalPrice = function() {
  //write a logic to return total price
};

Cart.prototype.removeItem = function(index) {
  //write logic to  remove a item from an array
};

Cart.prototype.listItems = function() {
  //return the list items
};

let myCart = new Cart();
myCart.add({ name: `Windows`, price: 1000, quantity: 1 });
