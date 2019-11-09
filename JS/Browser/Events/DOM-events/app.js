let btn = document.querySelector("button");

btn.addEventListener("click", function() {
  alert("button clicked");
});

function secondEvent(e) {
  alert("second event ");
  btn.removeEventListener("click", secondEvent);
}

btn.addEventListener("click", secondEvent);
