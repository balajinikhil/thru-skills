let form = document.querySelector("form");
let errorPara = document.querySelector("#error");

function validateForm(e) {
  e.preventDefault();
  let name = document.querySelector("input[name=name]").value;
  let email = document.querySelector("input[name=email]").value;

  if (!name) {
    errorPara.innerText = "Name field is required";
    errorPara.style.color = "red";
  }

  if (!email) {
    errorPara.innerText = "Email is required";
    errorPara.style.color = "red";
  }
}

/*live validation */
//onblur
let nameField = document.querySelector("input[name=name]");

nameField.onblur = function() {
  let val = nameField.value;
  if (!val) {
    errorPara.innerText = "name is required";
    errorPara.style.color = "red";
    nameField.style.border = "1px solid red";
  } else {
    errorPara.innerText = "";
    nameField.style.border = "1px solid green";
  }
};

//onfocus
let emailField = document.querySelector("input[name=email]");

emailField.onfocus = function() {
  errorPara.innerText = "provide valid email";
  errorPara.style.color = "blue";
};

form.onsubmit = validateForm;
