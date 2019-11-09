let anc = document.querySelector("a");
let audio = document.createElement("audio");

document.body.appendChild(audio);

function playSound(e) {
  e.preventDefault();
  audio.src = anc.href;
  audio.controls = true;
  audio.play();
}

anc.onclick = playSound;
