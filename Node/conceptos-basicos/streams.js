const fs = require('fs');

//TODO crear un fichero o un archivo de texto con 1000 lineas de lorem
// const file = fs.createWriteStream("./doc/file.txt");
// for(let i = 0; i < 1e6; i++){
// file.write('lorem ipsu agrgh jsmiw msdnw')
// }
// file.end();

const readStream = fs.createReadStream('./doc/file.txt');
const writeStream = fs.createWriteStream('./doc/salida.txt')
// readStream.on('data', (chunk)=>{
//     console.log("---nuevo trozo de datos---");
//     console.log(chunk.toString());
//     writeStream.write('---nuevo trozo de datos---')
//     writeStream.write(chunk);

// })

readStream.pipe(writeStream);