const section = document.getElementById("cuadricula");

function addDiv() {
  for (let i = 0; i < 256; i++) {
    const div = createNewItem();
    div.classList.add("sel");
    section.appendChild(div);
  }
}

function createNewItem() {
  const div = document.createElement("div");
  return div;
}

function changeColor(e) {
  let div = e.target;

  if (div.classList.contains("sel")) {
    div.classList.toggle("red");
  }
}
document.addEventListener("DOMContentLoaded", addDiv);

section.addEventListener("mouseover", changeColor);
