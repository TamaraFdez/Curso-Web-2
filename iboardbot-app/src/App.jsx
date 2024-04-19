import "./App.css";
import { useContext, useState, createContext } from "react";

const ExitoContext = createContext();
// eslint-disable-next-line react/prop-types
function ExitoProvider({ children }) {
  const [exito, setExito] = useState(false);
  return (
    <ExitoContext.Provider value={[exito, setExito]}>
      {children}
    </ExitoContext.Provider>
  );
}

function Form() {
  const [exito, setExito] = useContext(ExitoContext);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    text: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.text === "39785") {
      setExito(true);
      console.log(exito);
    } else {
      setError("Codigo incorrecto piltrafilla!😈");
    }
  };
  return (
    <div id="inicio" className={`form ${exito === true ? "hide" : "active"} form-container`}>
      <form action="POST" onSubmit={handleSubmit}>
        
        <label htmlFor="input-text" id="code">Código</label>
        <input
          type="text"
          placeholder="SECRET CODE"
          id="input-text"
          name="text"
          value={formData.text}
          onChange={handleChange}
          style={{
            border: "1px solid transparent",
            borderColor: error ? "red" : "transparent",
          }}
        />
        <div>
          <button type="submit" className="btn input-submit">
            Enviar
          </button>
          <button
            type="button"
            onClick={() =>
              setFormData({
                text: "",
              })
            }
            className="btn delete"
          >
            Borrar
          </button>
        </div>
        {error && <span style={{ color: "red" }}>{error} </span>}
      </form>
    </div>
  );
}
function SvgForm() {
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData()
    const file = event.target.fileInput.files[0];
    formData.append("svg", file)
    if (file && file.type === "image/svg+xml") {
      console.log("archivo SVG!", file);

      try {
        const response = await fetch(
          "http://ibb.muevetef/api/boards/jobs/main/file",
          {
            method: "POST",
        
            body: formData,
          }
        );
       
        if (response.ok) {
          // Manejar la respuesta exitosa aquí
          console.log("Enviado con éxito, Dibujando");
        } else {
          // Manejar errores de la solicitud
          console.error("Error al enviar el formulario");
          setError("Error de solicitud")
        }
      } catch (error) {
        // Manejar errores de red u otros errores
        console.error("Error:", error);
        setError("Error de red u otro")
      }
    } else {
      setError("Por favor, seleccione un archivo SVG.");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      {error}
      <input type="file" name="fileInput" accept="image/svg+xml" />
      <button type="submit">Subir Archivo SVG</button>
    </form>
  );
}
function TextForm() {
  const [error, setError] = useState(null);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const text = event.target.inputText.value;
    if (text === "") {
      setError("No hay nada que enviar");
    } else {
      console.log("hay texto", text);
      try {
        const response = await fetch(
          "http://ibb.muevetef/api/boards/jobs/main",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({WriteText: text}),
          }
        );

        if (response.ok) {
          // Manejar la respuesta exitosa aquí
          console.log("Enviado con éxito, Dibujando");
        } else {
          // Manejar errores de la solicitud
          console.error("Error al enviar el formulario");
          setError("Error de solicitud")

        }
      } catch (error) {
        // Manejar errores de red u otros errores
        console.error("Error:", error);
        setError("Error de red u otro")

      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      {error && <span style={{ color: "red" }}>{error} </span>}
      <label htmlFor="inputText"></label>
      <input
        type="text"
        name="inputText"
        id="inputText"
        style={{
          border: "1px solid transparent",
          borderColor: error ? "red" : "transparent",
        }}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}
function FormTwo() {
  const [exito, setExito] = useContext(ExitoContext);
  const handleBack = () => {
    setExito(false);
    console.log(exito);
  };

  return (
    <>
      <div id="container-form" className={`form ${exito === false ? "hide" : "active"}`}>
        <SvgForm />
        <TextForm />
        <button type="button" onClick={handleBack}>
          Atrás
        </button>
        <button type="button">Borrar Lienzo</button>
      </div>
    </>
  );
}
function App() {
  return (
    <>
    <header>
      <div id="ibb"></div>
    </header>
    <ExitoProvider>
      <main id="main">
        <Form />
        <FormTwo />
      </main>
    </ExitoProvider>
    </>
  );
}

export default App;
