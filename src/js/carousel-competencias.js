import ProgressBar from "progressbar.js"
import Splide from "@splidejs/splide"
import { persona } from "./user-data.js"

const container = document.querySelector("#carousel .splide__list")
const competencias = persona.competencias
// Contador de elementos
let count = 0

// Recorrer todas las competencias de la persona y crear un elemento div para cada una
competencias.forEach((competencia) => {
  // Obtener el nombre de la competencia y el valor numérico correspondiente
  const nombre = Object.keys(competencia)[0]
  const valor = competencia[nombre]
  const colorValor = valor < 50 ? "#80BFFE" : "#0075FF"

  // Crear los elementos div necesarios para la barra de progreso
  const progressLine = document.createElement("div")
  progressLine.classList.add("progress-line")

  const h5 = document.createElement("h5")
  h5.classList.add("mb-0")
  h5.textContent = nombre
  progressLine.appendChild(h5)

  const progressLineBar = document.createElement("div")
  progressLineBar.classList.add("progress-line__bar")
  progressLine.appendChild(progressLineBar)

  // Crear el ProgressBar.Line correspondiente y animarlo con el valor numérico
  const line = new ProgressBar.Line(progressLineBar, {
    strokeWidth: 4,
    color: colorValor,
    trailColor: "#F2F3F3",
    trailWidth: 4,
    text: {
      style: null,
      autoStyleContainer: false,
      className: "progress-line__bar--value",
    },
    step: function (state, line) {
      var value = `${Math.round(line.value() * 100)}%`
      line.setText(value)
    },
  })
  line.animate(valor / 100, {
    duration: 400,
    easing: "easeInOut",
  })

  // Si el contador llega a 5, crear un nuevo div con la clase 'list'
  if (count % 5 === 0) {
    const splide = document.createElement("li")
    splide.classList.add("splide__slide")
    const list = document.createElement("div")
    list.classList.add("list")
    splide.appendChild(list)
    container.appendChild(splide)
  }

  // Insertar el elemento de la barra de progreso en el último div creado
  const lists = document.querySelectorAll(".list")
  const list = lists[lists.length - 1]
  list.appendChild(progressLine)

  // Aumentar el contador de elementos
  count++
})

const splide = new Splide("#carousel", {
  perPage: 2,
  perMove: 1,
  pagination: true,
  list: "ul",
  arrows: false,
  gap: "8.75rem",

  breakpoints: {
    1024: {
      gap: "5rem",
    },
    640: {
      perPage: 1,
      gap: "0.5rem",
    },
  },
})

splide.mount()
