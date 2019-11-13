let inpt = document.querySelector("input");
let sbmtBtn = document.querySelector("#submtBtn");
let dispalyImages = document.querySelector(".displayImgs");

function getData() {
  let value = inpt.value;
  dispalyImages.innerHTML = "";
  let url = `https://api.giphy.com/v1/gifs/search?api_key=JqbFzq4ZgUBlG9ZARqDhXcXLQDryLXAR&q=${value}&limit=25&offset=0&rating=G&lang=en`;

  $.ajax({
    method: "GET",
    url: url,

    success: function(data) {
      console.log(`sucess`, data);
      let dt = data.data;

      dt.forEach(ele => {
        let url = ele.images.downsized.url;
        let img = document.createElement("img");
        img.src = url;

        dispalyImages.appendChild(img);
      });
    },
    error: function(dt) {
      console.log(`error`, dt);
    }
  });
}

sbmtBtn.addEventListener("click", getData);
