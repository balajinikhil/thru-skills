let inpt = document.querySelector("input");
let sbmtBtn = document.querySelector("#submtBtn");
let dispalyImages = document.querySelector(".displayImgs");

function getData() {
  dispalyImages.innerHTML = "";
  let value = inpt.value;
  let url = `https://api.giphy.com/v1/gifs/search?api_key=JqbFzq4ZgUBlG9ZARqDhXcXLQDryLXAR&q=${value}&limit=25&offset=0&rating=G&lang=en`;

  fetch(url)
    .then(data => data.json())
    .then(dt => {
      dt.data.forEach(ele => {
        let url = ele.images.downsized.url;
        let img = document.createElement("img");
        img.src = url;

        dispalyImages.appendChild(img);
      });
    })
    .catch(err => {
      console.log(err);
      let errorEle = document.createElement("p");
      errorEle.innerText = "Failed to load";
      errorEle.style.color = "red";
      dispalyImages.appendChild(errorEle);
    });
}

/*POST method*/
let postURL = "https://jsonplaceholder.typicode.com/posts";

let dt = {
  title: "foo",
  body: "bar",
  userId: 1
};

fetch(postURL, {
  method: "POST",
  body: JSON.stringify(dt),
  headers: {
    "content-type": "application/json"
  }
})
  .then(respData => respData.json())
  .then(bdData => console.log("POST Resp", bdData))
  .catch(err => console.log(err));

sbmtBtn.addEventListener("click", getData);
