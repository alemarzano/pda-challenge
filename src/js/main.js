"use strict"

// import AOS from 'aos';
// import 'aos/dist/aos.css';

// AOS.init();

/* LIBRARIES */
import bootstrap from "bootstrap"
import Splide from "@splidejs/splide"

/* COMPONENTES */

import "./steps.js"
import "./progress-circle.js"
import "./carousel-competencias.js"
import "./accordion-tendencias.js"

let tooltipElement = document.querySelector("#user-competencias")
let tooltipText =
  "Es la capacidad para identificar relaciones entre situaciones que no están explícitamente interrelacionadas, a través de un razonamiento creativo o conceptual."

let tooltip = new bootstrap.Tooltip(tooltipElement, {
  title: tooltipText,
  placement: "bottom",
})

/* Carousel en descripcion de perfil */
const splide = new Splide("#limitaciones", {
  perPage: 1,
  perMove: 1,
  pagination: true,
  list: "ul",
  arrows: true,
  gap: "4rem",
  padding: { left: "4rem", right: "4rem" },
})

splide.mount()
