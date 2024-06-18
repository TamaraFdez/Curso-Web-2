const fs = require("fs");
//leer ficheros
// fs.readFile('./doc/hola.txt', (err, data)=> {
//     if(err) throw err;

//     console.log(data.toString());
// })
//escribir ficheros
// fs.writeFile('./doc/hola23.txt','hello from fs', ()=>{
//     console.log('se ha creado');
// })
//directorios
if (!fs.existsSync("./img/hi")) {
  fs.mkdir("img/hi", { recursive: true }, (err) => {
    if (err) throw err;
    console.log("creado");
  });
}
//eliminar ficheros
if(fs.existsSync('./img/hi')){
    fs.unlink('./img/hi')
}
