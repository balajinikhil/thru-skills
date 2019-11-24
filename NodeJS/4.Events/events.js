let event = require("events");

let emitter = new event.EventEmitter();

emitter.setMaxListeners(20);

emitter.on("knock", function() {
  console.log("who's there??");
});
function knockListner() {
  console.log("What do you want?");
}
emitter.on("knock", knockListner);
/*
emitter.on("knock", () => console.log(3));
emitter.on("knock", () => console.log(4));
emitter.on("knock", () => console.log(5));
emitter.on("knock", () => console.log(6));
emitter.on("knock", () => console.log(7));
emitter.on("knock", () => console.log(8));
emitter.on("knock", () => console.log(9));
emitter.on("knock", () => console.log(10));
emitter.on("knock", () => console.log(11));
*/

emitter.emit("knock");
emitter.emit("knock");

emitter.once("mail", function() {
  console.log("mail sucessfully sent");
});

emitter.emit("mail");
emitter.emit("mail");

emitter.on("fullName", function(firstName, lastName) {
  console.log(`My name is ${firstName} ${lastName}`);
});

emitter.emit("fullName", "Java", "Script");

emitter.removeListener("knock", knockListner);

emitter.emit("knock");

emitter.removeAllListeners("fullName");

emitter.emit("fullName");
