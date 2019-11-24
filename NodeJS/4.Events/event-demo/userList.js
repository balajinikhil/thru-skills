let EventEmitter = require("events").EventEmitter;
let util = require("util");

let db = {
  users: [
    { name: "JS", gender: "female" },
    { name: "JavaScript", gender: "female" }
  ]
};

function userList() {
  // inherits its own property only
  EventEmitter.call(this);
}
//inherits prototype properties
util.inherits(userList, EventEmitter);

userList.prototype.save = function(usrObj) {
  console.log("Saving user");
  db.users.push(usrObj);
  this.emit("save");
};

userList.prototype.list = function() {
  console.log("users List");
  console.log(db.users);

  return db.users;
};

module.exports = userList;
