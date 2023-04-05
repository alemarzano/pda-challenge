import ProgressBar from "progressbar.js"

document.addEventListener("DOMContentLoaded", function () {
  let accordions = document.querySelectorAll(
    ".accordion-tendencias > .accordion-item"
  )

  accordions.forEach((accordion) => {
    let textElement = accordion.querySelector(".text")
    let barContainer = accordion.querySelector(".line")
    let valor = Math.random().toFixed(1)
    let collapseElement = accordion.querySelector(".collapse")
    const across = new ProgressBar.Line(barContainer, {
      strokeWidth: 4,
      color: "#0075FF",
      trailColor: "#F2F3F3",
      trailWidth: 4,
    })

    across.animate(valor, {
      duration: 400,
      easing: "easeInOut",
    })

    collapseElement.addEventListener("show.bs.collapse", () => {
      textElement.classList.add("transition-text")
      barContainer.classList.add("active")
    })

    collapseElement.addEventListener("hidden.bs.collapse", () => {
      textElement.classList.remove("transition-text")
      barContainer.classList.remove("active")
    })
  })
})
