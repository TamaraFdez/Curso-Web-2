import { useState, useEffect } from "react";
import "./styles/App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [board, setBoard] = useState(Array.from({ length: 8 }, () => ({})));

  useEffect(() => {
    if (isLoading) {
      async function fetchData() {
        try {
          const boardWithImages = await Promise.all(
            board.map(async (item) => {
              const response = await fetch(
                `https://api.disneyapi.dev/character/${
                  Math.floor(Math.random() * (7438 - 1 + 1)) + 1
                }`
              );
              if (response.ok) {
                const pj = await response.json();
                return {
                  ...item,
                  imageUrl: pj.data.imageUrl,
                  films: pj.data.films,
                  tvShows: pj.data.tvShows,
                };
              } else {
                throw new Error("Hubo un error al obtener el personaje");
              }
            })
          );
          setBoard(boardWithImages);
          setIsLoading(false);
        } catch (error) {
          setError(error.message);
        }
      }
      fetchData();
    }
  }, [isLoading, board]);

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

  return (
    <main className="board">
      <h1>Memory Disney</h1>
      <section className="Card">
        {board.map((e) => (
          <div key={e.id} className="Card">
            <h2>{e.name}</h2>
            <div className="imagen">
              <img src={e.imageUrl} alt="Imagen Aleatoria de Disney" />
              <p>{e.films.length === 0 ? e.tvShows : e.films}</p>
            </div>
          </div>
        ))}
      </section>
      <button onClick={randomPJ}>Volver a intentarlo</button>
    </main>
  );
}

export default App;
