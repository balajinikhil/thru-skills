let para = document.querySelector(`#noSession`);
para.innerHTML = 'updated Dynamically <a href="#">Google</a>';

para.style.color = "red";
para.style.border = "1px solid blue";

let nodePara = document.querySelector(`#node`);
nodePara.style.cssText = "color:green; background:red;";

console.log(nodePara.hasChildNodes());

nodePara.childNodes[1].innerText = `nodeJS`;
