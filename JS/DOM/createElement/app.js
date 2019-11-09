let hobbies = ["cricket", "music", "coding", "reading"];

let head = document.createElement("h2");

head.innerText = "Added dynamically";

document.body.appendChild(head);

let ul = document.querySelector("ul");
// let li = document.createElement("li");
// li.innerText = hobbies[0];
// ul.appendChild(li);

for (var i = 0; i < hobbies.length; i++) {
  let li = document.createElement("li");
  li.innerText = hobbies[i];
  ul.appendChild(li);
}
