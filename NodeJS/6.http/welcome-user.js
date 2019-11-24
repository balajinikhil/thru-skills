const http = require("http");
const url = require("url");

let server = http.createServer(function(req, res) {
  let parsedUrl = url.parse(req.url, true);
  console.log(parsedUrl);

  //   console.log(req);
  //   console.log(req.headers);
  //   console.log(req.url);

  //   if (req.url != "/favicon.ico") {
  //     console.log(req);
  //   }
  //   console.log(req.method);

  let query = parsedUrl.query;

  res.end(`Welcome ${query.name} ${query.lastName}`);
});

server.listen(3000, function() {
  console.log("Server up and running on port 3000");
});
