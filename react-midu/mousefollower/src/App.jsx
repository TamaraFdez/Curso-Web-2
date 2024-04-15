import { useState, useEffect } from 'react'
import './App.css'
const FollowMouse = ()=>{
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({x: 0, y:0})
  //pointer move
  useEffect(()=>{
    console.log('effect ', { enabled }) 
   
    const handleMove = (event) =>{
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY})
    }
    if(enabled){
      window.addEventListener('pointermove', handleMove)
    }
    //para limpiar efecto el return IMPORTANTE: IR LIMPIANDO EFECTOS PARA MEJOR RENDIMIENTO Y FUNCIONAMIENTO
    //geteventlistener(elemento que ver por ejemplo window) para ver quien se suscribe a eventos y poder ver si se limpian bien los eventos
    //--> cleanup: se ejecuta cuando se desmonta y cuando cambian las dependencias antes de ejecutar el efecto de nuevo.
    return ()=> {
      window.removeEventListener('pointermove', handleMove)
    }
  },[enabled])
 // window.addEventListener() <--- se va a ejecutar siempre que se renderice(sin sentido) necesitamos controlarlo Como? UseEffect.

 //change class
 useEffect(()=>{
   document.body.classList.toggle('no-cursor', enabled)
   return ()=>{ // <--cleanup method (funcion de limpieza)
   document.body.classList.remove('no-cursor')

   }
 },[enabled])
 //[] --> solo se ejcuta una vez cuando se monta el componente.
 //[enabled] --> se ejecuta cuando cambia enabled y cuando se monta el componente.
 // undefined ---> se ejcuta cada vez que se renderiza el componente.
  return (
    <>  
    <div style={{
            position: 'absolute',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            border: '1px solid #fff',
            borderRadius: '50%',
            opacity: 0.8,
            pointerEvents: 'none',
            left: -25,
            top: -25,
            width: 50,
            height: 50,
            transform: `translate(${position.x}px, ${position.y}px)`
    }}></div>
      <h3> Proyecto 3</h3> 
      <button onClick={()=> setEnabled(!enabled)}>{enabled ? "Desactivar" : "Activar"} seguir puntero</button> 
        </>
  )
}
function App() {
  const [mounted, setMounted] = useState(true)
  return(
    <main>
      <FollowMouse />
      
    </main>
  )
}

export default App
