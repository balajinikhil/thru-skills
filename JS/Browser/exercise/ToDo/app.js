let inpt = document.body.querySelector(" input[name=todo]");
let btn = document.body.querySelector("button");
let displayList = document.body.querySelector("#displayList");
let items = JSON.parse(localStorage.getItem("list")) || [];
console.log(items);

function addTodoItem() {
  let value = inpt.value;
  let data = {
    value: value,
    checked: true
  };

  items.push(data);

  localStorage.setItem("list", JSON.stringify(items));

  renderList(items);
}

function renderList(list) {
  displayList.innerHTML = list
    .map((ele, i) => {
      return `

      <li> 
      <input type='checkbox' id ='inpt${i}' ${ele.checked ? "checked" : " "}/>
      <label> ${ele.value} </label>
      </li>`;
    })
    .join(" ");
}

let checkbox = document.querySelector("input[type=checkbox]");

renderList(items);

displayList.addEventListener("click", function(e) {
  console.log(e.target);
});

btn.addEventListener("click", addTodoItem);
