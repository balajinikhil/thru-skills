let userAge = prompt(`enter your age`);
let para = document.querySelector(`#allowed`);
console.log(userAge);

if (userAge && parseInt(userAge > 18)) {
  para.innerText = "welcome";
  para.style.color = "green";
} else {
  para.innerText = "bug off";
  para.style.color = "red";
}
