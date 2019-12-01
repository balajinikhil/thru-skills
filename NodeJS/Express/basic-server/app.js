const express = require("express");
const app = express();
//register some middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("welcome to my App");
});

app.get("/contact", (req, res) => {
  let name = req.query.name;
  res.send(`contact page ${name}`);
});

app.post("/contact", function(req, res) {
  let bodyData = req.body;
  console.log(bodyData);
  res.send("Thanks for contacting us");
  res.json(bodyData);
});

app.delete("/remove", (req, res) => {
  res.send(`sucessfully deleted`);
});

app.put("/update", (res, req) => {
  res.send("updated");
});
app.patch("/update", (res, req) => {
  res.send("partial updated");
});

app.get("/:product", (req, res) => {
  res.send(`product ${req.params.product}`); //i.e pass below
});

app.get("/product/:name/:lastName", (req, res) => {
  let nme = req.params.name; //to acess
  let lastNme = req.params.lastName;
  res.send(`Dynamic Route ${nme} ${lastNme}`);
});

app.listen(3000, () => {
  console.log("server up and running");
});
