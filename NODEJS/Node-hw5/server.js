const http = require("node:http");

const hostname = "localhost";
const port = 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  const url = req.url;

  if (url === "/") {
    res.write("<h2>INDEX SAYFASI</h2>");
  } else if (url === "/about") {
    res.write("<h2>ABOUT SAYFASI</h2>");
  } else if (url === "/contact") {
    res.write("<h2>CONTACT SAYFASI</h2>");
  } else {
    res.write("<h2>404 SAYFA BULUNAMADI</h2>");
  }

  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
