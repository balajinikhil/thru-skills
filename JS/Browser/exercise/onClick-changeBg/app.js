let btn = document.querySelector("button");

let bd = document.body;

btn.onclick = function() {
  function randomNumber(min, max) {
    return parseInt(Math.random() * (max - min) + min);
  }

  bd.style.backgroundColor = `rgb(${randomNumber(1, 255)},
  ${randomNumber(1, 255)},${randomNumber(1, 255)})`;
};

/*

*/
