/*require returns exports object */

let user = require("./user-module");
let bar = require("./user-module").bar;

console.log("required : ", user);

bar();
user.foo();
