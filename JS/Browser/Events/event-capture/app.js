let outer = document.body.querySelector("#outer");
let inner = document.body.querySelector("#inner");
let btn = document.body.querySelector("button");

outer.addEventListener(
  "click",
  function(e) {
    // e.stopPropagation();
    alert("outer click");
  },
  true
);

inner.addEventListener(
  "click",
  function(e) {
    // e.stopPropagation();
    alert("inner click");
  },
  true
);

btn.addEventListener(
  "click",
  function(e) {
    e.stopPropagation();
    alert("button click");
  },
  false
);
