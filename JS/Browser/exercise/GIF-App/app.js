let inpt = document.querySelector("input");
let sbmtBtn = document.querySelector("#submtBtn");
let dispalyImages = document.querySelector(".displayImgs");

function getData() {
  dispalyImages.innerHTML = "";
  let value = inpt.value;
  let xhr = new XMLHttpRequest();

  function displayData() {
    if (xhr.readyState < 4) {
      return;
    }
    if (xhr.status !== 200) {
      return;
    }

    let data = JSON.parse(xhr.responseText);
    console.log(data);

    let dt = data.data;
    console.log(dt);

    dt.forEach(ele => {
      let url = ele.images.downsized.url;
      let img = document.createElement("img");
      img.src = url;

      dispalyImages.appendChild(img);
    });

    /*
    let imgs = data.data.images;

    // console.log(Object.key(imgs));
    Object.key(imgs).forEach(ele => {
      let dt = imgs[ele];

      let img = document.createElement("img");
      img.src = dt.url;

      dispalyImages.appendChild(img);
    });
    */

    console.log(JSON.parse(xhr.responseText));
  }
  xhr.onreadystatechange = displayData;

  xhr.open(
    "GET",
    `https://api.giphy.com/v1/gifs/search?api_key=JqbFzq4ZgUBlG9ZARqDhXcXLQDryLXAR&q=${value}&limit=25&offset=0&rating=G&lang=en`,
    true
  );

  xhr.send();
}
sbmtBtn.addEventListener("click", getData);
