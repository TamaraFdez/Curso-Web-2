import { useState, useEffect } from "react";
import "./styles/App.css";
import Card from "./components/Card.jsx";

function App() {
  const tags = [{},{},{},{}]
  const [isLoading, setIsLoading] = useState(true);
  const [imagenUrl, setImagenUrl] = useState(null);
  const [error, setError] = useState(null);
  const [board, setBoard] = useState(tags);

  useEffect(() => {
    if (isLoading) {
      // eslint-disable-next-line no-inner-declarations
      async function fetchData() {
        try {
          const response = await fetch(
            `https://api.disneyapi.dev/character/${
              Math.floor(Math.random() * (7438 - 1 + 1)) + 1
            }`
          );
          if (response.ok) {
            const pj = await response.json();
            setImagenUrl(pj);
            setError(null);
            setIsLoading(false);
            console.log(pj.data);
          } else {
            setError("Hubo un error al obtener el personaje");
          }
        } catch (error) {
          setError("No pudimos hacer la solicitud para obtener el personaje");
        }
      }
      fetchData();
    }
  }, [isLoading]);

  const randomPJ = () => {
    setIsLoading(true);
  };
  if (error) {
    return (
      <div className="App">
        <h1>{error}</h1>
        <button onClick={randomPJ}>Volver a intentarlo</button>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="App">
        <h1>Cargando...</h1>
      </div>
    );
  }
  
// const filmsFuc =
//     e.films.length === 0
//       ? tvShows
//       : films;
  // const FillArray = (props) => {
    
  //   board.forEach(i){
  //     board[i] = {
  //       id: props.data._id,
  //       name: props.data.name,
  //       imageUrl: props.data.imageUrl,
  //       tvShows: props.data.tvShows,
  //       films: props.data.films,
  //     }; 
  //     setBoard() 
  //     setIsLoading(true);
      
       
  //   }
  //   return(
  //       <section className="Card"> 
  //       {board.map ((e) => {
  //        return (
  //           <div key={e.id} className="Card">
  //             <h2>{e.name}</h2>{" "}
  //             <div className="imagen">
  //               <img src={e.imageUrl} alt="Imagen Aleatoria de disney" />
  //               <p>{e.films.length === 0 ? e.tvShows: e.films}</p>
  //             </div>
  //           </div>)})}
  //       </section>
  //     );
  //   }
    
 

  return (
    <main className="board">
      <h1>Memory Disney </h1>
      {/* <FillArray imagenUrl={imagenUrl} /> */}
      

      <button onClick={randomPJ}>Volver a intentarlo</button>
    </main>
  );
}

export default App;
