const http = require("http");

http.createServer((req, res) => {
  res.write("Bot running");
  res.end();
}).listen(3000);

console.log("Server started");
