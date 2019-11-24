const http = require("http");
http
  .createServer(function(req, resp) {
    resp.end("Hello World");
  })
  .listen(3000, function() {
    console.log("server Up and running at 3000 port");
  });
