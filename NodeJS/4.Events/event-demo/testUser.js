let User = require("./userList");

usr.on("save", function() {
  console.log(`User stored in DB`);
});

let usr = new User();
usr.save({ name: "Tommy", gender: "Male" });
usr.list();
