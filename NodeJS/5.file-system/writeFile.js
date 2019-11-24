const fs = require("fs");

console.log(`Program Starts`);
//synchronous
// fs.writeFileSync(__dirname + `myFile.txt`, "This is written by Node", "UTF-8");

fs.writeFile(__dirname + `myFile.txt`, "Writing using fs write file", function(
  err
) {
  if (err) {
    console.log(err);
  } else {
    console.log(`sucessfully Written`);
  }
});

console.log(`program ends`);

/*
fs.appendFile();
fs.readdir();
fs.rmdir();
fs.rename();
fs.chown()
*/
