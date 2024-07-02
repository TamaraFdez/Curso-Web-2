const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("¡Hola, mundo!");
});
server.listen(3000, () => {
  console.log("El servidor se está ejecutando en el puerto 3000");
});
