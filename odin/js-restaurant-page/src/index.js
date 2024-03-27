import "./style.css";
const inicio = document.getElementById("inicio");
const menu = document.getElementById("menu");
const contacto = document.getElementById("contacto");
const content = document.getElementById("content");
const nav = document.querySelector("nav");
//Funciones reutilizables

function createH(h2text) {
  let h = document.createElement("h2");
  h.textContent = `${h2text}`;
  return h;
}
function createP(text) {
  let p = document.createElement("p");
  p.textContent = `${text}`;
  return p;
}
function createDiv() {
  let div = document.createElement("div");
  return div;
}
function createSection() {
  const section = document.createElement("section");
  return section;
}
//Funcion para montar section
function mountSection(h2text, text) {
  const div = createDiv();
  let section = createSection();
  const p = createP(text);
  const h2 = createH(h2text);
  section.appendChild(h2);
  div.appendChild(p);
  section.appendChild(div);
  content.appendChild(section);
}
//funcion para montar titulo
function titulo(h1) {
  let title = document.createElement("h1");
  title.textContent = `${h1}`;
  content.appendChild(title);
}

//Funcion para borrar sections
function remove() {
  const contenido = document.getElementById("content");
  while (contenido.firstChild) {
    contenido.removeChild(contenido.firstChild);
  }
}
//Añadir y quitar clase
function addActive(e) {
  e.classList.add("active");
}
function changeMenu() {
  const link = nav.querySelectorAll("a");
  link.forEach((a) => {
    if (a.classList.contains("active")) {
      a.classList.remove("active");
    }
  });
}

//Eventos

inicio.addEventListener("click", () => {
  changeMenu(),
    addActive(inicio),
    remove(),
    titulo("Restaurante"),
    mountSection(
      "Exquisito Bocado",
      "En el corazón de la ciudad, el Exquisito Bocado ofrece una experiencia culinaria incomparable. Con un menú que combina lo tradicional y lo innovador, ingredientes frescos y un servicio impecable, cada visita es un viaje de sabores inolvidable. Únete a nosotros y descubre por qué somos más que un restaurante; somos un refugio para los amantes de la buena comida y la buena compañía."
    ),
    mountSection("Horario", "Lunes a Sabado: 11:00 - 21:00 Domingo: Cerrado."),
    mountSection(
      "Ubicación:",
      "Calle Cohete, número 42, Barrio Gravedad Cero, Ciudad Espacial"
    );
});
menu.addEventListener("click", () => {
  changeMenu(), addActive(menu);
  remove(),
    titulo("Menu"),
    mountSection("Bocadillos de nitos", "nitos + jamoncito + panecito"),
    mountSection("Pepito con tomatito", "bocadillo de lomo con tomate"),
    mountSection("Lasaña", "Lasaña con pasta y bechamel");
});
contacto.addEventListener("click", () => {
  changeMenu(), addActive(contacto);
  remove(),
    titulo("Contacto"),
    mountSection("Telefono", "999 111 222"),
    mountSection(
      "Dirección",
      "Calle Cohete, número 42, Barrio Gravedad Cero, Ciudad EspacialLunes a Sabado: 11:00 - 21:00 Domingo: Cerrado."
    ),
    mountSection("Email", "Cohete42@gmail.com");
});
document.addEventListener("DOMContentLoaded", () => {
  changeMenu(),
    addActive(inicio),
    remove(),
    titulo("Restaurante"),
    mountSection(
      "Exquisito Bocado",
      "En el corazón de la ciudad, el Exquisito Bocado ofrece una experiencia culinaria incomparable. Con un menú que combina lo tradicional y lo innovador, ingredientes frescos y un servicio impecable, cada visita es un viaje de sabores inolvidable. Únete a nosotros y descubre por qué somos más que un restaurante; somos un refugio para los amantes de la buena comida y la buena compañía."
    ),
    mountSection("Horario", "Lunes a Sabado: 11:00 - 21:00 Domingo: Cerrado."),
    mountSection(
      "Ubicación:",
      "Calle Cohete, número 42, Barrio Gravedad Cero, Ciudad Espacial"
    );
});
