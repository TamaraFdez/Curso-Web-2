// const _name = 'Pepito'

// console.log(_name);

const saludar = (nombre) => {
    console.log(`hello word, ${nombre}`);
  };
  
  saludar("tami");
  
  
  globalThis.setTimeout(()=>{
      console.log("tiempo");
  },3000);
  
  console.log(__dirname);
  console.log(__filename);
  