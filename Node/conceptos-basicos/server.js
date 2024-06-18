const http = require("http");
const fs = require("fs");

const local = "localhost:3000/";

const server = http.createServer((req, res) => {
  console.log("ha llegado una petición");
  console.log(req.url, req.method);
 
  if (req.url === "/") { 
    res.setHeader("content-Type", "text/html");
    fs.readFile("./index.html", (err, data) => {
      if (err) {
        console.log(err);
        res.end();
      } else {
        console.log(data);
        res.end(data);
      }
    });
 }else if(req.url === '/style.css'){ 
    res.setHeader("content-Type", "text/css");
    fs.readFile("./style.css", (err, data) => {
        if (err) {
          console.log(err);
          res.end();
        } else {
          console.log(data);
          res.end(data);
        }
      });

  } else if (req.url === `/hola`) {
    res.setHeader("content-Type", "text/html");
    res.statusCode = 200;
    res.write("<h1>hola</h1>");
    res.end();
  } else {
    res.setHeader("content-Type", "text/html");
    res.statusCode = 404;
    res.write("<h1>error</h1>");
    res.end();
  }
});

server.listen(3000, "localhost", () => {
  console.log("server escuchando en el puerto 3000");
});
