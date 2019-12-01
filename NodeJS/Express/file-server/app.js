const express = require("express");
const fs = require("fs");
const middleware = require('./middleware/app-middleware')
const routes = require('./routes/index')
const app = express();

//body data middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//serve static content
app.use(express.static(__dirname + '/static', { maxAge: 24 * 60 * 60 }))

//logger middleware
app.use(middleware.logger);

//routes
app.get("/", routes.index);

app.get('/contact', routes.contact);

app.post("/contact", routes.doContact);

//Error Middleware
app.use(middleware.notfound);

app.use(middleware.errorHandler);

app.listen(3000, () => {
  console.log("Server up and running 3000");
});
