let bd = document.querySelector("body");
function randomNumber(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}

console.log(randomNumber(1, 255));

bd.style.backgroundColor = `rgb(${randomNumber(1, 255)},${randomNumber(
  1,
  255
)},${randomNumber(1, 255)})`;
