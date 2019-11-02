//getElementsByTagName();

let paras = document.getElementsByTagName(`p`);

console.log(paras[0]);

//getElementsByClassName()
let classNames = document.getElementsByClassName(`head`);

console.log(classNames);

//getElementsById();
let para = document.getElementById(`noSession`);
console.log(para);

//querySelector()
//querySelectorAll()

//tag
let p = document.querySelector(`p`);
let ps = document.querySelectorAll(`p`);
console.log(p);
console.log(ps);

//class
let firstHead = document.querySelector(`.head`);
console.log(firstHead);

//id
let noSess = document.querySelector(`#noSession`);
console.log(noSess);

let enoOndhu = document.querySelector(`input [name=name]`);
console.log(enoOndhu);
