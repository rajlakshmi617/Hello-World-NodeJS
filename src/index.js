var http = require("http");
const hostname = "127.0.0.1";
const port = 3000;
//create a server object:
const server = http.createServer(function(req, res) {
  res.statusCode = 200;
  res.setHeader = ("Content-Type", "text/plain");
  res.end("Hello World!"); //end the response
});
server.listen(port, hostname, () => {
  //the server object listens on port 8080
  console.log(`Server running at https://${hostname}:${port}/`);
});
