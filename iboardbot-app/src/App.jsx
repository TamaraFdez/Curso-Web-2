
import "./App.css";
import { useState } from "react";


// function login(newText) {
//   fetch("https://ibb.muevetef/api/boards/jobs/main", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(newText),
//   })
//     .then((res) => {
//       if (res.ok) {
//         return res.json();
//       } else {
//         throw alert("Error");
//       }
//     })
//     .then((res) => {
//       return console.log(res);
//     })
//     .catch((error) => console.error(error, "ha habido un error"));
// }

function App() {
 const [error, setError] = useState(null);
 

  const handleSumbit = (event) => {
    event.preventDefault();
    const newText = Object.fromEntries(new window.FormData(event.target));
    console.log(newText);
    
    if (newText.text === "") {
      setError("No se puede jugar sin texto😭");
      console.log("json no enviado");
      
    }else {
      setError(null)
      // login(newText)
    }
  };



  return (
    <>
      <main>
        <form id="form-text" onSubmit={handleSumbit}>
          <label htmlFor="texto">
            {error && <span style={{ color: "red" }}>{error} </span>}
          </label>
          <input
            type="text"
            id="texto"
            name="text"
            className="input-text"
            style={{
              border: "1px solid transparent",
              borderColor: error ? "red" : "transparent",
            }}
          />
          <div>
            <button className="sumbit">Enviar</button>
            <button type="reset">
              Borrar
            </button>
          </div>
        </form>
        
      </main>
    </>
  );
}

export default App;
