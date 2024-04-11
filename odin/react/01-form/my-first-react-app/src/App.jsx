import './App.css';
import { useState } from 'react';

function InfoGeneral() {
  const [info, setInfo] = useState({ name: '', tel: '', email: '' });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setInfo({
      name: event.target.name.value,
      tel: event.target.tel.value,
      email: event.target.email.value,
    });
    console.log(info);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <h1>Rellena el siguiente Formulario</h1>
        <label>
          ¿Cómo te llamas?
          <input type="text" id="name" name="name" />
        </label>
        <label>
          Dirección de Correo Electrónico:
          <input type="email" id="email" name="email" />
        </label>
        <label>
          ¿Cuál es tu número de teléfono?
          <input type="tel" id="tel" name="tel" />
        </label>
        <div className="btns">
          <button type="submit" className="btn btn-enviar" id="enviar">
            Añadir
          </button>
          <button
            type="button"
            className="btn btn-editar"
            id="editar"
            onClick={() => setInfo({ name: '', tel: '', email: '' })}
          >
            borrar
          </button>
        </div>
      </form>
    </div>
  );
}
function Skills() {
  const [infoSkill, setInfoSkill] = useState({
    javascript: false,
    html: false,
    css: false,
  });
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setInfoSkill({
      javascript: event.target.js.checked,
      css: event.target.css.checked,
      html: event.target.html.checked,
    });
  };
  console.log(infoSkill);
  return (
    <div>
      <form className="form-skills" onSubmit={handleFormSubmit}>
        <h2>¿Cuales son tus habilidades?</h2>
        <label>
          <input
            type="checkbox"
            id="js"
            onClick={(e) =>
              e.target.checked
                ? setInfoSkill({ javascript: true })
                : setInfoSkill({ javascript: false })
            }
          />{' '}
          Javascript
        </label>
        <label>
          <input
            type="checkbox"
            id="html"
            onClick={(e) =>
              e.target.checked
                ? setInfoSkill({ html: true })
                : setInfoSkill({ html: false })
            }
          />{' '}
          HTML
        </label>
        <label>
          <input
            type="checkbox"
            id="css"
            onClick={(e) =>
              e.target.checked
                ? setInfoSkill({ css: true })
                : setInfoSkill({ css: false })
            }
          />{' '}
          CSS
        </label>
        <div className="btns">
          <button type="submit" className="btn btn-enviar" id="enviar">
            Añadir
          </button>
        </div>
      </form>
    </div>
  );
}
function Experience() {
  return (
    <div>
      <form>
        <label>
          Nombre de la empresa:
          <input type="text" />
        </label>
        <label>
          Título del puesto:
          <select name="" id="">
            <option value="jefe">Dueño</option>
            <option value="operario">Operario</option>
            <option value="informatico">Informatico</option>
          </select>
        </label>
        <label>
          Años que estuviste en ella:
          <input type="number" />
        </label>
        <div className="btns">
          <button type="submit" className="btn btn-enviar" id="enviar">
            Añadir
          </button>
        </div>
      </form>
    </div>
  );
}

function App() {
  return (
    <>
      <InfoGeneral />
      <Skills />
      <Experience />
    </>
  );
}
export default App;
