let ul = document.querySelector("#ulEle");
let li = document.querySelector("#liEle");
let a = document.querySelector("#ancEle");

ul.onclick = function(e) {
  alert("selected ul");
};

li.onclick = function(e) {
  e.stopPropagation();
  alert("selected li");
};

a.onclick = function(e) {
  //to stop propogation
  e.stopPropagation();
  alert("selected a");
};
