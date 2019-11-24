const fs = require("fs");

let data = "WTF";

let writSream = fs.createWriteStream(__dirname + "/myFile.txt", {
  encoding: "utf-8"
});

writSream.write(data);

writSream.on("finish", () => console.log("done writing"));

writSream.on("error", err => console.log(err));
