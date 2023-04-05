import { persona } from './user-data.js';

const dato = `${persona.consistencia}`;
let fraccion = null;
const rangos = {
  1: { inicio: 1, fin: 20 },
  2: { inicio: 21, fin: 40 },
  3: { inicio: 41, fin: 60 },
  4: { inicio: 61, fin: 80 },
  5: { inicio: 81, fin: 100 },
};

for (const valor in rangos) {
  const rango = rangos[valor];
  if (dato == 0 ) {
  	fraccion = 0
    break;
  } else if (dato > rango.inicio && dato <= rango.fin) {
    fraccion = Number(valor);
    break;
  }
}

let steps = document.querySelectorAll('.step')

for (let i = 0; i <= fraccion; i++) {
    setTimeout(function() {
      steps[i].classList.add('step-color');
    }, (i + 1) * 300);
}

