const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

function logger(req, res, next) {
  console.log(req.method, req.url);
  next();
}

app.use(logger);

app.use((req, res, next) => {
  console.log("Executing second middleware");
  req.myName = "Learning Express";
  next("something went wrong");
});

app.get("/", (req, res) => {
  console.log(`Req Obj ${req.myName}`);

  res.send("welcome");
});

function routeMiddleWare(req, res, next) {
  console.log(`Route level middleware`);
  next();
}

app.get("/about", routeMiddleWare, (req, res) => {
  res.send("About us");
});

app.get("/content", (req, res, next) => {
  fs.readFile(__dirname + `/package.json`),
    (err, data) => {
      if (err) {
        next(err);
      } else {
        res.send(data);
      }
    };
});

app.use((req, res, next) => {
  res.status(404).send("Not Found");
});

app.use((err, req, res, next) => {
  console.log(`Error thrown ${err}`);
  res.status(500).send("Something went wrong");
});

app.listen(3002, () => console.log("App up and running on port 3002"));
