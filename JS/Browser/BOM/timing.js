//setTimeout();

/*
setTimeout(function() {
  console.log(`after one second`);
}, 1000);

for (let i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log(i);
    3, 2000;
  });
}
*/

//setInterval

var counter = 1;

var id = setInterval(function() {
  if (counter == 5) {
    clearInterval(id);
  }
  console.log(`every second`);
  counter++;
}, 1000);

console.log(`Interval ID: `, id);

//time counter
