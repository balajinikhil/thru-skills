/*Time functions  */
setTimeout(function() {
  console.log("time out function");
}, 0);

let counter = 1;
setInterval(function() {
  console.log("interval function");
  if (counter == 5) {
    clearInterval(this);
  }
  counter++;
}, 1000);

/* setImmediate : executes the function immediately
gives priority*/
setImmediate(function() {
  console.log("immediate execution");
});
