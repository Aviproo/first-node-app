const http = require("http");
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url == "/home") {
    res.write("<html>");
    res.write("<head><title>My first page</title></head>");
    res.write("<body><h1>hello this is home page</h1></body>");
    res.write("</html>");
    return res.end();
  }
  if (url == "/about") {
    res.write("<html>");
    res.write("<head><title>My first page</title></head>");
    res.write("<body><h1>hello this is about page</h1></body>");
    res.write("</html>");
    return res.end();
  }
  if (url == "/node") {
    res.write("<html>");
    res.write("<head><title>My first page</title></head>");
    res.write("<body><h1>hello this is nodejs project</h1></body>");
    res.write("</html>");
    return res.end();
  }

  res.write("<html>");
  res.write("<head><title>My first page</title></head>");
  res.write("<body><h1>hello from my Node.js Server</h1></body>");
  res.write("</html>");
  res.end();
});
server.listen(3000);
