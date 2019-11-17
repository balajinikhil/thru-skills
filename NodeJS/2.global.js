// console.log(global);
process.title = "My process";

/*process object*/
// console.log(global.process);
console.log(process.platform);
console.log(process.pid);

console.log(process.cwd());
console.log(process.cpuUsage());

process.on("exit", function() {
  console.log("About to end the process");
});

process.on("uncaughtException", function() {
  console.log("something went wrong");
});

/*Properties*/
console.log("directory Name", __dirname); //exact path of your file
console.log("file name :", __filename); //to get file name
console.log(module);
