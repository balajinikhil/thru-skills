let inpt = document.body.querySelector(" input[name=todo]");
let btn = document.body.querySelector("button");
let displayList = document.body.querySelector("#displayList");
let items = JSON.parse(localStorage.getItem("list")) || [];

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

function toggle(e) {
  //console.log(this);
  //console.log(e.target);

  if (!e.target.matches("input")) return;

  let ele = e.target;

  let index = parseInt(ele.dataset.id);

  if (items[index].checked) {
    items[index].checked = false;
  } else {
    items[index].checked = true;
  }
}

displayList.addEventListener("click", toggle);

btn.addEventListener("click", addTodoItem);
