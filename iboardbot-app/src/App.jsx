import { useName } from "./hocks/useName";
import "./App.css";

// function login(newName) {
//   fetch("https://ibb.muevetef/api/boards/jobs/main", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(newName),
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
  const { name, setName, error } = useName();

  const handleSumbit = (event) => {
    event.preventDefault();
    const newText = Object.fromEntries(new window.FormData(event.target));
    console.log(newText);
    setName(newText.text);
    console.log(error);
    if (error !== null) {
      // login(newName);
      console.log("json no enviado");
    } else {
      console.log("json enviado");
    }
  };

  const handleReset = () => {
    setName("");
  };

  return (
    <>
      <header>
        <form id="form" onSubmit={handleSumbit}>
          <label htmlFor="texto">
            Escrito:{error && <span style={{ color: "red" }}>{error} </span>}
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
            <button type="reset" onClick={handleReset}>
              Borrar
            </button>
          </div>
        </form>
        <div></div>
      </header>
    </>
  );
}

export default App;
