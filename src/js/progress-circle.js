
import ProgressBar from 'progressbar.js'
import { persona } from './user-data.js';

let gradient = '<defs><linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#0075F6"/><stop offset="55%" stop-color="#40C4FF"/><stop offset="100%" stop-color="#0075F6/></linearGradient></defs>';

let progressValue = `${persona.compatibilidad}`;
let progressValueAnimation = progressValue / 100;
let progressLegend = 'Compatibilidad del puesto'

let bar = new ProgressBar.Circle('#progress-circle', {
  strokeWidth: 8,
  color: 'url(#gradient)',
  trailColor: '#F2F3F3',
  trailWidth: 8,
  svgStyle: null,
	 text: {
				className: 'progress-circle__label',
	 },
  step: function(state, circle) {
    var value = `${Math.round(circle.value() * 100)}%`;
    circle.setText(value + `<span class="progress-circle__label--text">${progressLegend}</span>`);

  }
});

bar.svg.insertAdjacentHTML('afterbegin', gradient);



bar.animate(progressValueAnimation, {
    duration: 1500,
  	easing: 'easeInOut',
});
