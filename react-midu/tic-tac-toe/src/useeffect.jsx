import { useState, UseEffect, useEffect } from "react"

const component = () =>{
  const [value, setValue] = useState(false)

  useEffect(()=>{
    //Cada vez que se renderice el componente
    console.log("se va a ejecutar")
  })
}
