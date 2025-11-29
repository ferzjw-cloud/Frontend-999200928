const boton = document.querySelector("button")
const body = document.body
boton.addEventListener("click", () => {
  if (body.classList.contains("claro")) {
    body.classList.remove("claro")
    body.classList.add("oscuro")
  } else {
    body.classList.remove("oscuro")
    body.classList.add("claro")
  }
}).claro {
  background-color: blue;
}
.oscuro {
  background-color: sienna;
}