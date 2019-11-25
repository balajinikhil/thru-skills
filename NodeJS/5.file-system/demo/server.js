const http = require("http");

const server = http.createServer();

server.on("request", function(req, rep) {
  rep.end("Working");
});

server.listen(3000, () => console.log("Server up and runnimg port 3000"));
